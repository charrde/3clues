// game.js

import { GAME_MODES, MAX_ATTEMPTS, STORAGE_KEYS, MESSAGE_TYPES } from './constants.js';
import { Storage } from './storage.js';
import { UI } from './ui.js';

export class Game {
    constructor(gameData) {
        this.gameData = gameData; // Array of game objects
        this.ui = new UI(this);
        this.initializeGame();
    }

    /*** Initialization ***/
    initializeGame() {
        // Initialize game state from storage or set defaults
        this.currentMode = GAME_MODES.DAILY;
        this.attemptsLeft = MAX_ATTEMPTS;
        this.hintUsed = false;
        this.categoryRevealed = false;
        this.gameWon = false;
        this.hintsUsedCount = 0;
        this.lifetimeHintsUsed = parseInt(Storage.get(STORAGE_KEYS.LIFETIME_HINTS, 0));
        this.scoreIncrease = 0;
    
        this.currentScore = parseInt(Storage.get(STORAGE_KEYS.CURRENT_SCORE, 0));
        this.highScore = parseInt(Storage.get(STORAGE_KEYS.HIGH_SCORE, 0));
        this.streak = parseInt(Storage.get(STORAGE_KEYS.STREAK, 0));
    
        const now = new Date();
        const localMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        this.todayDateString = new Date(localMidnight).toDateString();
    
        this.lastPlayed = Storage.get(STORAGE_KEYS.LAST_PLAYED, '');
    
        this.currentGame = {};
    
        // Bind UI event listeners
        this.bindUIActions();
    
        // Check first-time user
        this.checkFirstTimeUser();
    
        // Start the game
        this.startGame();
    }

    /*** UI Binding ***/
    bindUIActions() {
        // Submit Guess
        document.querySelector('.btn-submit').addEventListener('click', () => this.submitGuess());

        // Show Hint
        document.querySelector('.btn-hint').addEventListener('click', () => this.showHint());

        // Reveal Category
        document.querySelector('.btn-category').addEventListener('click', () => this.revealCategory());

        // Switch to Daily Mode
        document.querySelector('#daily-mode-btn').addEventListener('click', () => this.switchMode(GAME_MODES.DAILY));

        // Switch to Practice Mode
        document.querySelector('#practice-mode-btn').addEventListener('click', () => this.switchMode(GAME_MODES.PRACTICE));

        // Skip or Give Up
        document.querySelector('.btn-skip').addEventListener('click', () => this.handleGiveUp());

        // Enter Key Submission
        this.ui.guessInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.submitGuess();
            }
        });
    }

    /*** User Onboarding ***/
    checkFirstTimeUser() {
        if (!Storage.get(STORAGE_KEYS.FIRST_TIME)) {
            Storage.set(STORAGE_KEYS.FIRST_TIME, true);
            this.ui.openInstructionModal();
        }
    }

    /*** Game Start ***/
    startGame() {
        this.updateScoreboard();

        if (this.currentMode === GAME_MODES.DAILY) {
            document.querySelector('.btn-skip').innerHTML = 'Give Up';
            this.startDailyGame();
        }
        else {
            document.querySelector('.btn-skip').innerHTML = 'Skip';
            this.startPracticeGame();
        }

        this.generateAndDisplayClues();
    }

    /*** Score Management ***/
    updateScoreboard() {
        this.ui.updateScoreboard({
            currentScore: this.currentScore,
            highScore: this.highScore,
            streak: this.streak,
            lifetimeHintsUsed: this.lifetimeHintsUsed,
        });
    }

    updateScore() {
        this.scoreIncrease = ((this.attemptsLeft + 1) * 10) - (this.hintsUsedCount * 5);
        this.scoreIncrease = Math.max(this.scoreIncrease, 0);
        this.currentScore += this.scoreIncrease;
        this.streak++;

        if (this.currentScore > this.highScore) {
            this.highScore = this.currentScore;
            Storage.set(STORAGE_KEYS.HIGH_SCORE, this.highScore);
        }

        this.ui.updateScoreboard({
            currentScore: this.currentScore,
            highScore: this.highScore,
            streak: this.streak,
            lifetimeHintsUsed: this.lifetimeHintsUsed,
        });

        Storage.set(STORAGE_KEYS.CURRENT_SCORE, this.currentScore);
        Storage.set(STORAGE_KEYS.STREAK, this.streak);
    }

    resetStreak() {
        this.streak = 0;
        this.currentScore = 0;
        this.scoreIncrease = 0;
        this.ui.updateScoreboard({
            currentScore: this.currentScore,
            highScore: this.highScore,
            streak: this.streak,
            lifetimeHintsUsed: this.lifetimeHintsUsed,
        });
        Storage.set(STORAGE_KEYS.STREAK, this.streak);
        Storage.set(STORAGE_KEYS.CURRENT_SCORE, this.currentScore);
    }

    /*** Game Mode Management ***/
    switchMode(mode) {
        if (this.currentMode === mode) return;

        this.currentMode = mode;
        document.getElementById('daily-mode-btn').classList.remove('active');
        document.getElementById('practice-mode-btn').classList.remove('active');

        if (mode === GAME_MODES.DAILY) {
            document.getElementById('daily-mode-btn').classList.add('active');
            document.querySelector('.btn-skip').innerHTML = 'Give Up';
            this.startGame();
        }
        else {
            document.getElementById('practice-mode-btn').classList.add('active');
            document.querySelector('.btn-skip').innerHTML = 'Skip';
            this.startGame();
        }
    }


    /*** Game State Management - Practice Mode ***/
    initializePracticeModeOrder() {
        const shuffledOrder = this.shuffleArray([...Array(this.gameData.length).keys()]);
        Storage.set(STORAGE_KEYS.PRACTICE_GAME_ORDER, shuffledOrder);
        Storage.set(STORAGE_KEYS.PRACTICE_GAME_INDEX, 0);
    }

    /**
     * @param {Array} array
     * @returns {Array}
     */

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    startPracticeGame() {
        let shuffledOrder = Storage.get(STORAGE_KEYS.PRACTICE_GAME_ORDER, null);
        let currentIndex = parseInt(Storage.get(STORAGE_KEYS.PRACTICE_GAME_INDEX, 0));

        // If no order exists or all games have been played, initialize/reset the order
        if (!shuffledOrder || currentIndex >= shuffledOrder.length) {
            this.initializePracticeModeOrder();
            shuffledOrder = Storage.get(STORAGE_KEYS.PRACTICE_GAME_ORDER, []);
            currentIndex = 0;
        }

        // Get the game index for the current practice session
        const gameIndex = shuffledOrder[currentIndex];
        this.currentGame = this.gameData[gameIndex];

        // Increment the current index and update storage
        currentIndex++;
        Storage.set(STORAGE_KEYS.PRACTICE_GAME_INDEX, currentIndex);

        // Reset game state and display clues
        this.resetGameState();
        this.generateAndDisplayClues();
    }

    /*** Game State Management ***/

    startDailyGame() {
        if (this.lastPlayed === this.todayDateString) {
            this.loadSavedGame();
        }
        else {
            this.resetGameState();
            this.generateAndDisplayClues();
            Storage.set(STORAGE_KEYS.LAST_PLAYED, this.todayDateString);
            Storage.remove(STORAGE_KEYS.GAME_STATE);
        }
    }

    resetGameState() {
        this.attemptsLeft = MAX_ATTEMPTS;
        this.hintUsed = false;
        this.categoryRevealed = false;
        this.gameWon = false;
        this.hintsUsedCount = 0;
        this.scoreIncrease = 0;

        // Clear UI elements
        this.ui.guessHistory.innerHTML = '';
        this.ui.messageEl.innerText = '';
        this.ui.attemptsEl.innerText = `Attempts left: ${this.attemptsLeft}`;
        this.ui.hintEl.innerText = '';
        this.ui.categoryEl.innerText = '';
        this.ui.guessInput.value = '';
        this.ui.enableInputs();
    }

    generateAndDisplayClues() {
        if (this.currentMode === GAME_MODES.DAILY) {
            this.currentGame = this.generateDailyGame();
        }
        else {
            this.currentGame = this.generatePracticeGame();
        }

        this.ui.displayClues(this.currentGame.clues);
    }

    generateDailyGame() {
        const now = new Date();
        // Create a Date object for local midnight
        const localMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        // Calculate the number of days since epoch based on local midnight
        const dayIndex = Math.floor(localMidnight / 86400000) % this.gameData.length;
        return this.gameData[dayIndex];
    }

    generatePracticeGame() {
        const randomIndex = Math.floor(Math.random() * this.gameData.length);
        return this.gameData[randomIndex];
    }

    saveGameState() {
        console.log('saveGameState');
        const gameState = {
            attemptsLeft: this.attemptsLeft,
            hintUsed: this.hintUsed,
            categoryRevealed: this.categoryRevealed,
            gameWon: this.gameWon,
            hintsUsedCount: this.hintsUsedCount,
            scoreIncrease: this.scoreIncrease,
            guessHistory: this.getGuessHistory(),
        };

        Storage.set(STORAGE_KEYS.GAME_STATE, gameState);
    }

    loadSavedGame() {
        const savedState = Storage.get(STORAGE_KEYS.GAME_STATE, null);
        if (savedState) {
            this.attemptsLeft = savedState.attemptsLeft;
            this.hintUsed = savedState.hintUsed;
            this.categoryRevealed = savedState.categoryRevealed;
            this.gameWon = savedState.gameWon;
            this.hintsUsedCount = savedState.hintsUsedCount || 0;
            this.scoreIncrease = savedState.scoreIncrease || 0;
            this.currentGame = this.generateDailyGame();

            this.restoreGuessHistory(savedState.guessHistory);
            if (this.hintUsed) {
                this.ui.displayHint(this.currentGame.hint);
            }
            if (this.categoryRevealed || this.gameWon) {
                this.ui.displayCategory(this.currentGame.category);
            }

            if (this.attemptsLeft === 0 || this.gameWon) {
                this.endGame();
            }
            else {
                this.ui.displayMessage(savedState.message || '', MESSAGE_TYPES.INFO);
                this.ui.updateAttemptsLeft(this.attemptsLeft);
                this.ui.enableInputs();
            }
        }
        else {
            this.resetGameState();
        }
    }

    restoreGuessHistory(guessHistory) {
        guessHistory.forEach((guessData, index) => {
            const guessTile = document.createElement('div');
            guessTile.className = guessData.className;
            guessTile.id = `guess${index + 1}`;

            if (guessData.icon || guessData.guessText) {
                const icon = document.createElement('div');
                icon.classList.add('icon');
                icon.innerText = guessData.icon;

                const guessText = document.createElement('div');
                guessText.classList.add('guess-text');
                guessText.innerText = guessData.guessText;

                guessTile.appendChild(icon);
                guessTile.appendChild(guessText);
            }

            this.ui.guessHistory.appendChild(guessTile);
        });
    }

    getGuessHistory() {
        const guessTiles = document.querySelectorAll('.guess-tile');
        const guessHistory = [];
        guessTiles.forEach(tile => {
            const icon = tile.querySelector('.icon')?.innerText || '';
            const guessText = tile.querySelector('.guess-text')?.innerText || '';
            guessHistory.push({
                className: tile.className,
                icon,
                guessText,
            });
        });
        return guessHistory;
    }

    /*** Guess Handling ***/
    normalizeString(str) {
        return str
            .toLowerCase()
            .normalize("NFD") // Normalize the string
            .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
            .replace(/['’‘`´]/g, "") // Remove various apostrophe-like characters
            .replace(/[.,!?;:-_&@#%*()\[\]{}<>~`\\/]/g, "") // Remove additional punctuation and symbols
            .replace(/\s+/g, " ") // Replace multiple spaces with a single space
            .trim(); // Remove leading and trailing spaces
    }

    submitGuess() {
        const userGuess = this.ui.guessInput.value.trim();
        this.attemptsLeft--;
    
        if (userGuess.length === 0) {
            this.ui.showToast('Please enter a guess.', MESSAGE_TYPES.WARNING);
            return;
        }
        if (this.gameWon || this.attemptsLeft === 0) {
            return;
        }

        const normalizedUserGuess = this.normalizeString(userGuess);
        const normalizedAnswer = this.normalizeString(this.currentGame.answer);
    
        if (normalizedUserGuess === normalizedAnswer) {
            this.handleCorrectGuess();
        } else {
            this.handleIncorrectGuess();
        }
    
        if (this.currentMode === GAME_MODES.DAILY) {
            this.saveGameState();
        }
    
        this.ui.updateAttemptsLeft(this.attemptsLeft);
        this.ui.clearGuessInput();
    }
    

    handleCorrectGuess() {
        this.gameWon = true;
        this.ui.addGuessTile(this.ui.guessInput.value.trim(), true);
        if (this.currentMode === GAME_MODES.DAILY) {
            this.updateScore();
        }
        this.endGame();
    }

    handleIncorrectGuess() {
        this.ui.addGuessTile(this.ui.guessInput.value.trim(), false);
        if (this.attemptsLeft > 0) {
            this.ui.displayMessage('Incorrect guess. Try again!', MESSAGE_TYPES.ERROR);
        }
        else {
            this.ui.displayMessage('No attempts left. Game Over!', MESSAGE_TYPES.ERROR);
            this.endGame();
            this.resetStreak();
        }
    }

    /*** Hint and Category ***/
    showHint() {
        if (!this.hintUsed) {
            this.ui.displayHint(this.currentGame.hint);
            this.hintUsed = true;
            if (this.currentMode === GAME_MODES.DAILY) {
                this.hintsUsedCount++;
                this.lifetimeHintsUsed++;
                this.ui.updateScoreboard({
                    currentScore: this.currentScore,
                    highScore: this.highScore,
                    streak: this.streak,
                    lifetimeHintsUsed: this.lifetimeHintsUsed,
                });
                Storage.set(STORAGE_KEYS.LIFETIME_HINTS, this.lifetimeHintsUsed);
                this.saveGameState();
            }
        }
        else {
            this.ui.showToast('You have already used the hint for this round.', MESSAGE_TYPES.INFO);
        }
    }

    revealCategory() {
        if (!this.categoryRevealed) {
            this.ui.displayCategory(this.currentGame.category);
            this.categoryRevealed = true;
            if (this.currentMode === GAME_MODES.DAILY) {
                this.hintsUsedCount++;
                this.lifetimeHintsUsed++;
                this.ui.updateScoreboard({
                    currentScore: this.currentScore,
                    highScore: this.highScore,
                    streak: this.streak,
                    lifetimeHintsUsed: this.lifetimeHintsUsed,
                });
                Storage.set(STORAGE_KEYS.LIFETIME_HINTS, this.lifetimeHintsUsed);
                this.saveGameState();
            }
        }
        else {
            this.ui.showToast('The category is already revealed.', MESSAGE_TYPES.INFO);
        }
    }

    /*** Game End Handling ***/
    endGame() {
        this.ui.disableInputs();
        if (this.currentMode === GAME_MODES.PRACTICE) {
            this.ui.displayMessage(
                this.gameWon
                    ? `Woohoo! The correct answer was: <strong>${this.currentGame.answer}</strong>`
                    : `Better luck next time! The correct answer was: <strong>${this.currentGame.answer}</strong>`,
                this.gameWon ? MESSAGE_TYPES.SUCCESS : MESSAGE_TYPES.ERROR
            );
            setTimeout(() => {
                this.startPracticeGame();
            }, 3000);
        }
        else {
            this.showModal();
        }
    }

    handleGiveUp() {
        this.attemptsLeft = 0;
        this.ui.updateAttemptsLeft(this.attemptsLeft);
        if (this.currentMode === GAME_MODES.DAILY) {
            this.gameWon = false;
            this.resetStreak();
            this.saveGameState();
        }
        this.endGame();
    }

    showModal() {
        if (this.currentMode === GAME_MODES.PRACTICE) return;

        const modalData = {
            gameWon: this.gameWon,
            answer: this.currentGame.answer,
            hintsUsedCount: this.hintsUsedCount,
            scoreIncrease: this.scoreIncrease,
            streak: this.streak,
            highScore: this.highScore,
        };

        this.ui.showModal(modalData);
    }
}
