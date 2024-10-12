import { MESSAGE_TYPES, THEMES, STORAGE_KEYS, MAX_ATTEMPTS } from './constants.js';
import { Storage } from './storage.js';
import JSConfetti from 'js-confetti';

export class UI {

    constructor(game) {
        this.game = game;
        this.bindElements();
        this.attachEventListeners();
        this.initializeTheme();
        this.jsConfetti = new JSConfetti();
    }

    bindElements() {
        // Modal Elements
        this.modalOverlay = document.getElementById('modal-overlay');
        this.modalCloseButtons = document.querySelectorAll('#modal-close, .btn-close');
        this.modalWord = document.getElementById('modal-word');
        this.modalHintsUsed = document.getElementById('modal-hints-used');
        this.modalScoreGained = document.getElementById('modal-score-gained');
        this.modalStreak = document.getElementById('modal-streak');
        this.modalHighscore = document.getElementById('modal-highscore');
        this.modalTitle = document.getElementById('modal-title');
        this.modalMessage = document.getElementById('modal-message');

        // Instruction Modal Elements
        this.instructionModalOverlay = document.getElementById('instruction-modal-overlay');
        this.instructionsBtn = document.getElementById('instructions-btn');
        this.instructionCloseBtn = document.getElementById('instruction-close');

        // UI Elements
        this.currentScoreEl = document.getElementById('current-score');
        this.highScoreEl = document.getElementById('high-score');
        this.streakEl = document.getElementById('streak');
        this.lifetimeHintsUsedEl = document.getElementById('lifetime-hints-used');
        this.messageEl = document.getElementById('message');
        this.attemptsEl = document.getElementById('attempts');
        this.hintEl = document.getElementById('hint');
        this.categoryEl = document.getElementById('category');
        this.guessInput = document.getElementById('guess-input');
        this.guessHistory = document.getElementById('guess-history');

        // Toggle Elements
        this.accordionToggle = document.querySelector('.accordion-toggle');
        this.accordionContent = document.querySelector('.accordion-content');
        this.dropdownToggle = document.querySelector('.dropdown-toggle');
        this.dropdownContent = document.querySelector('.dropdown-content');

        // Theme Toggle
        this.themeToggle = document.getElementById('theme-toggle');
    }

    attachEventListeners() {
        // Close Modal Buttons
        this.modalCloseButtons.forEach(button => {
            button.addEventListener('click', () => this.closeModal());
        });

        // Instructions Modal Buttons
        this.instructionsBtn.addEventListener('click', () => this.openInstructionModal());
        this.instructionCloseBtn.addEventListener('click', () => this.closeInstructionModal());

        // Accordion Toggle
        this.accordionToggle.addEventListener('click', () => this.toggleAccordion());

        // Dropdown Toggle
        this.dropdownToggle.addEventListener('click', () => this.toggleDropdown());

        // Theme Toggle
        this.themeToggle.addEventListener('change', () => this.toggleTheme());

        // Window Resize
        window.addEventListener('resize', () => this.handleResize());
    }

    initializeTheme() {
        const storedTheme = Storage.get(STORAGE_KEYS.THEME, THEMES.DARK);
        document.documentElement.setAttribute('data-theme', storedTheme);
        this.themeToggle.checked = storedTheme === THEMES.DARK;
    }

    toggleTheme() {
        const newTheme = this.themeToggle.checked ? THEMES.DARK : THEMES.LIGHT;
        document.documentElement.setAttribute('data-theme', newTheme);
        Storage.set(STORAGE_KEYS.THEME, newTheme);
    }

    toggleAccordion() {
        if (this.accordionContent.classList.contains('expanded')) {
            this.accordionContent.classList.remove('expanded');
            this.accordionContent.classList.add('collapsed');
        } 
        else {
            this.accordionContent.classList.remove('collapsed');
            this.accordionContent.classList.add('expanded');
        }
        this.accordionToggle.classList.toggle('active');
    }

    toggleDropdown() {
        if (this.dropdownContent.classList.contains('expanded')) {
            this.dropdownContent.classList.remove('expanded');
            this.dropdownContent.classList.add('collapsed');
        } 
        else {
            this.dropdownContent.classList.remove('collapsed');
            this.dropdownContent.classList.add('expanded');
        }
        this.dropdownToggle.classList.toggle('active');
    }

    handleResize() {
        if (window.innerWidth > 768) {
            this.dropdownContent.classList.remove('expanded', 'collapsed');
            this.accordionContent.classList.remove('expanded', 'collapsed');
            this.accordionToggle.classList.remove('active');
            this.dropdownToggle.classList.remove('active');
        }
    }

    openInstructionModal() {
        this.instructionModalOverlay.style.display = 'flex';
    }

    closeInstructionModal() {
        this.instructionModalOverlay.style.display = 'none';
    }

    showModal(modalData) {
        
        this.modalOverlay.style.display = 'flex';
        this.modalWord.innerHTML = `The word was: <span>${modalData.answer}</span> 🎯`;

        if (modalData.gameWon) {
            this.modalHintsUsed.innerHTML = `You used <span>${modalData.hintsUsedCount}</span> hints. 🧠`;
            this.modalScoreGained.innerHTML = `<span>${modalData.scoreIncrease}</span> points gained! 🎉`;
            this.modalStreak.innerHTML = `You're on a <span>${modalData.streak}</span> ${modalData.streak === 1 ? 'day' : 'days'} streak! 🌟`;
            this.modalTitle.innerText = 'Woohoo! 🎉';
            this.modalMessage.innerText = 'Come back tomorrow for another puzzle!';
            this.jsConfetti.addConfetti()
        } else {
            this.modalHintsUsed.innerHTML = '';
            this.modalScoreGained.innerText = 'Better luck next time!';
            this.modalStreak.innerText = 'Your streak has been reset.';
            this.modalTitle.innerText = 'Game Over!';
            this.modalMessage.innerText = 'Come back tomorrow to try again on a new puzzle!';
        }

        this.modalHighscore.innerHTML = `High Score: <span>${modalData.highScore}</span>`;
    }

    closeModal() {
        this.modalOverlay.style.display = 'none';
    }

    updateScoreboard({ currentScore, highScore, streak, lifetimeHintsUsed }) {
        this.currentScoreEl.innerText = currentScore;
        this.highScoreEl.innerText = highScore;
        this.streakEl.innerText = streak;
        this.lifetimeHintsUsedEl.innerText = lifetimeHintsUsed;
    }

    displayClues(clues) {
        document.getElementById('clue1').innerText = clues[0];
        document.getElementById('clue2').innerText = clues[1];
        document.getElementById('clue3').innerText = clues[2];
    }

    addGuessTile(guess, isCorrect) {
        const guessIndex = MAX_ATTEMPTS - this.game.attemptsLeft + 1;
        const guessTile = document.createElement('div');
        guessTile.classList.add('guess-tile');
        guessTile.setAttribute('id', `guess${guessIndex}`);

        const icon = document.createElement('div');
        icon.classList.add('icon');
        icon.innerText = isCorrect ? '✔' : '✖';

        const guessText = document.createElement('div');
        guessText.classList.add('guess-text');
        guessText.innerText = guess;

        guessTile.appendChild(icon);
        guessTile.appendChild(guessText);

        if (isCorrect) {
            guessTile.classList.add('correct');
            this.displayMessage('Correct! Well done.', MESSAGE_TYPES.SUCCESS);
        }
        else {
            guessTile.classList.add('incorrect');
            this.displayMessage('Incorrect guess. Try again!', MESSAGE_TYPES.ERROR);
            this.updateAttemptsLeft(this.game.attemptsLeft);
        }

        this.guessHistory.appendChild(guessTile);
    }

    displayMessage(message, type) {
        switch (type) {
            case MESSAGE_TYPES.SUCCESS:
                this.messageEl.style.color = '#44bd32';
                break;
            case MESSAGE_TYPES.ERROR:
                this.messageEl.style.color = '#e84118';
                break;
            case MESSAGE_TYPES.INFO:
                this.messageEl.style.color = '#000';
                break;
            case MESSAGE_TYPES.WARNING:
                this.messageEl.style.color = '#fbc531';
                break;
            default:
                this.messageEl.style.color = '#000';
        }
        this.messageEl.innerHTML = message;
    }

    updateAttemptsLeft(attemptsLeft) {
        this.attemptsEl.innerText = `Attempts left: ${attemptsLeft}`;
    }

    displayHint(hint) {
        this.hintEl.innerText = `💡 Hint: ${hint}`;
    }

    displayCategory(category) {
        this.categoryEl.innerText = `Category: ${category}`;
    }

    clearGuessInput() {
        this.guessInput.value = '';
        this.guessInput.focus();
    }

    disableInputs() {
        this.guessInput.disabled = true;
        document.querySelector('.btn-submit').disabled = true;
        document.querySelector('.btn-hint').disabled = true;
        document.querySelector('.btn-category').disabled = true;
        document.querySelector('.btn-skip').disabled = true;
    }

    enableInputs() {
        this.guessInput.disabled = false;
        document.querySelector('.btn-submit').disabled = false;
        document.querySelector('.btn-hint').disabled = false;
        document.querySelector('.btn-category').disabled = false;
        document.querySelector('.btn-skip').disabled = false;
    }

    showToast(message, type = MESSAGE_TYPES.INFO) {
        switch (type) {
            case MESSAGE_TYPES.SUCCESS:
                break;
            case MESSAGE_TYPES.ERROR:
                break;
            case MESSAGE_TYPES.INFO:
                break;
            case MESSAGE_TYPES.WARNING:
                break;
            default:
                break;
        }
    }
}
