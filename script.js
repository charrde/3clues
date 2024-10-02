let currentGame = {};
const totalAttempts = 5;
let attemptsLeft = totalAttempts;
let hintUsed = false;
let categoryRevealed = false;
let gameWon = false;
let currentMode = 'daily';
let hintsUsedCount = 0;
let lifetimeHintsUsed = localStorage.getItem('lifetimeHintsUsed') || 0;
let scoreIncrease = 0;

// Scoring variables
let currentScore = parseInt(localStorage.getItem('currentScore')) || 0;
let highScore = parseInt(localStorage.getItem('highScore')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;

// Date variables for daily puzzle
const today = new Date();
let lastPlayed = localStorage.getItem('lastPlayed') || '';

document.addEventListener("DOMContentLoaded", function () {
    // event listeners to the buttons
    document.querySelector('#modal-close').addEventListener('click', closeModal);
    document.querySelector('.btn-close').addEventListener('click', closeModal);
    document.querySelector('.btn-submit').addEventListener('click', submitGuess);
    document.querySelector('.btn-hint').addEventListener('click', showHint);
    document.querySelector('.btn-category').addEventListener('click', revealCategory);
    document.querySelector('#daily-mode-btn').addEventListener('click', () => switchMode('daily'));
    document.querySelector('#practice-mode-btn').addEventListener('click', () => switchMode('practice'));

    // event listener for 'Enter' key press on the guess input
    document.querySelector('#guess-input').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            submitGuess();
        }
    });

	const themeToggle = document.getElementById('theme-toggle');
	const storedTheme = localStorage.getItem('theme') || 'light';
	document.documentElement.setAttribute('data-theme', storedTheme);
	themeToggle.checked = storedTheme === 'dark';

	themeToggle.addEventListener('change', () => {
		const newTheme = themeToggle.checked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	});

});

function startGame() {
    // Update scoreboard
    currentScore = parseInt(localStorage.getItem('currentScore')) || 0;
    highScore = parseInt(localStorage.getItem('highScore')) || 0;
    streak = parseInt(localStorage.getItem('streak')) || 0;
    lifetimeHintsUsed = parseInt(localStorage.getItem('lifetimeHintsUsed')) || 0;

    document.getElementById('current-score').innerText = currentScore;
    document.getElementById('high-score').innerText = highScore;
    document.getElementById('streak').innerText = streak;
    document.getElementById('lifetime-hints-used').innerText = lifetimeHintsUsed;

    if (currentMode === 'daily') {
        startDailyGame();
    } 
    else {
        startPracticeGame();
    }
}

function startDailyGame() {
    // Check if the player has already played today
    if (lastPlayed === today.toDateString()) {
        loadSavedGame();
        return;
    } 
    else {
        resetGameState();

        // Select a game data based on a consistent method using the current date so that it's the same for all players.
        const seedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const seed = seedDate.getTime();
        const dayIndex = Math.floor((seed / 86400000)) % gameData.length;
        currentGame = gameData[dayIndex];

        displayClues();

        localStorage.setItem('lastPlayed', today.toDateString());
        localStorage.removeItem('gameState');
    }
}

function startPracticeGame() {
    resetGameState();
    const randomIndex = Math.floor(Math.random() * gameData.length);
    currentGame = gameData[randomIndex];
    displayClues();
}

function resetGameState() {
    attemptsLeft = totalAttempts;
    hintUsed = false;
    categoryRevealed = false;
    gameWon = false;
    hintsUsedCount = 0;

    // Only reset scoreIncrease if starting a new game, not when loading a saved game
    if (currentMode !== 'daily' || !localStorage.getItem('gameState')) {
        scoreIncrease = 0;
    }

    document.getElementById('message').innerText = '';
    document.getElementById('attempts').innerText = '';
    document.getElementById('hint').innerText = '';
    document.getElementById('category').innerText = '';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').disabled = false;
    document.querySelector('.btn-submit').disabled = false;
    document.querySelector('.btn-hint').disabled = false;
    document.querySelector('.btn-category').disabled = false;

    // Reset guess history tiles
    for (let i = 1; i <= totalAttempts; i++) {
        const guessTile = document.getElementById(`guess${i}`);
        guessTile.className = 'guess-tile';
        guessTile.innerHTML = '';
    }
}

function displayClues() {
    document.getElementById('clue1').innerText = currentGame.clues[0];
    document.getElementById('clue2').innerText = currentGame.clues[1];
    document.getElementById('clue3').innerText = currentGame.clues[2];
}

function submitGuess() {
    let userGuess = document.getElementById('guess-input').value.trim();

    if (userGuess.length === 0) {
        alert('Please enter a guess.');
        return;
    }

    const guessIndex = totalAttempts - attemptsLeft + 1;
    const guessTile = document.getElementById(`guess${guessIndex}`);

    // Create icon element
    const icon = document.createElement('div');
    icon.classList.add('icon');

    // Create text element
    const guessText = document.createElement('div');
    guessText.classList.add('guess-text');
    guessText.innerText = userGuess;

    if (userGuess.toLowerCase() === currentGame.answer.toLowerCase()) {
        guessTile.classList.add('correct');
        icon.innerText = '✔';
        document.getElementById('message').style.color = '#44bd32';
        document.getElementById('message').innerText = '';
        document.getElementById('attempts').innerText = '';
        gameWon = true;

        // Append icon and text to guess tile
        guessTile.appendChild(icon);
        guessTile.appendChild(guessText);

        if (currentMode === 'daily') {
            updateScore();
            saveGameState();
        }
        endGame();
    } else {
        guessTile.classList.add('incorrect');
        icon.innerText = '✖';
        attemptsLeft--;
        if (attemptsLeft > 0) {
            document.getElementById('message').style.color = '#e84118';
            document.getElementById('message').innerText = '❌ Incorrect guess. Try again!';
            document.getElementById('attempts').innerText = `Attempts left: ${attemptsLeft}`;
        } 
        else {
            document.getElementById('message').style.color = '#e84118';
            document.getElementById('message').innerText = `🚫 Game Over! The correct answer was "${currentGame.answer}".`;
            document.getElementById('attempts').innerText = '';
            if (currentMode === 'daily') {
                resetStreak();
                saveGameState();
            }
            endGame();
        }

        // Append icon and text to guess tile
        guessTile.appendChild(icon);
        guessTile.appendChild(guessText);

        if (currentMode === 'daily') {
            saveGameState();
        }
    }

    // Clear input field
    document.getElementById('guess-input').value = '';
}

function showHint() {
    if (!hintUsed) {
        document.getElementById('hint').innerText = `💡 Hint: ${currentGame.hint}`;
        hintUsed = true;
        hintsUsedCount++;
        lifetimeHintsUsed++;
        if (currentMode === 'daily') {
            localStorage.setItem('lifetimeHintsUsed', lifetimeHintsUsed);
            saveGameState();
        }
        document.getElementById('lifetime-hints-used').innerText = lifetimeHintsUsed;
    } 
    else {
        alert('You have already used the hint for this round.');
    }
}

function revealCategory() {
    if (!categoryRevealed) {
        document.getElementById('category').innerText = `Category: ${currentGame.category}`;
        categoryRevealed = true;
        hintsUsedCount++;
        lifetimeHintsUsed++;
        if (currentMode === 'daily') {
            localStorage.setItem('lifetimeHintsUsed', lifetimeHintsUsed);
            saveGameState();
        }
        document.getElementById('lifetime-hints-used').innerText = lifetimeHintsUsed;
    } 
    else {
        alert('The category is already revealed.');
    }
}

function endGame() {
    document.getElementById('guess-input').disabled = true;
    document.querySelector('.btn-submit').disabled = true;
    document.querySelector('.btn-hint').disabled = true;
    document.querySelector('.btn-category').disabled = true;

    // Ensure clues, hint, and category are displayed after game over
    displayClues();

    if (hintUsed) {
        document.getElementById('hint').innerText = `💡 Hint: ${currentGame.hint}`;
    }

    if (categoryRevealed) {
        document.getElementById('category').innerText = `Category: ${currentGame.category}`;
    } 
    else {
        // Reveal category automatically at the end of the game
        document.getElementById('category').innerText = `Category: ${currentGame.category}`;
    }

    if (currentMode === 'practice') {
        setTimeout(() => {
            startPracticeGame();
        }, 1000);
    }
    else {
        showModal();
    }
}

function updateScore() {
    // Calculate score based on attempts left and hints used
    scoreIncrease = (attemptsLeft * 10) - (hintsUsedCount * 5); // Deduct 5 points per hint used
    if (scoreIncrease < 0) scoreIncrease = 0; // Ensure score doesn't go negative
    currentScore = parseInt(currentScore) + scoreIncrease;
    streak = parseInt(streak) + 1;

    // Update high score if necessary
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('highScore', highScore);
    }

    // Update scoreboard
    document.getElementById('current-score').innerText = currentScore;
    document.getElementById('high-score').innerText = highScore;
    document.getElementById('streak').innerText = streak;

    // Save to localStorage
    localStorage.setItem('currentScore', currentScore);
    localStorage.setItem('streak', streak);
}

function resetStreak() {
    streak = 0;
    currentScore = 0;
    scoreIncrease = 0;
    document.getElementById('current-score').innerText = currentScore;
    document.getElementById('streak').innerText = streak;
    localStorage.setItem('streak', streak);
    localStorage.setItem('currentScore', currentScore);
}

function showModal() {
    if (currentMode === 'practice') {
        return;
    }

    document.getElementById('modal-overlay').style.display = 'flex';

    document.getElementById('modal-word').innerText = `The word was: ${currentGame.answer} 🎯`;
    if (gameWon) {
        document.getElementById('modal-hints-used').innerText = `You used ${hintsUsedCount} hints. 🧠`;
        document.getElementById('modal-score-gained').innerText = `${scoreIncrease} points gained! 🎉`;
        document.getElementById('modal-streak').innerText = `You're on a ${streak} ${streak === 1 ? 'day' : 'days'} streak! 🌟`;
    }
    else {
        document.getElementById('modal-score-gained').innerText = `Better luck next time!`;
        document.getElementById('modal-streak').innerText = `Your streak has been reset.`;
    }
    document.getElementById('modal-highscore').innerText = `High Score: ${currentScore}`;
    document.getElementById('modal-title').innerText = gameWon ? 'Woohoo! 🎉' : 'Game Over!';
}


function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    if (currentMode === 'practice') {
        startPracticeGame();
    }
}

function saveGameState() {
    const gameState = {
        attemptsLeft,
        hintUsed,
        categoryRevealed,
        gameWon,
        hintsUsedCount,
        scoreIncrease,
        guessHistory: [],
        message: document.getElementById('message').innerText,
    };

    for (let i = 1; i <= totalAttempts; i++) {
        const guessTile = document.getElementById(`guess${i}`);
        const iconElement = guessTile.querySelector('.icon');
        const guessTextElement = guessTile.querySelector('.guess-text');

        gameState.guessHistory.push({
            className: guessTile.className,
            icon: iconElement ? iconElement.innerText : '',
            guessText: guessTextElement ? guessTextElement.innerText : '',
        });
    }

    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadSavedGame() {
	const seedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
	const seed = seedDate.getTime();
	const dayIndex = Math.floor((seed / 86400000)) % gameData.length;
	currentGame = gameData[dayIndex];

	displayClues();

	const savedState = JSON.parse(localStorage.getItem('gameState'));
	if (savedState) {
		attemptsLeft = savedState.attemptsLeft;
		hintUsed = savedState.hintUsed;
		categoryRevealed = savedState.categoryRevealed;
		gameWon = savedState.gameWon;
		hintsUsedCount = savedState.hintsUsedCount || 0;
		scoreIncrease = savedState.scoreIncrease || 0;

		for (let i = 1; i <= totalAttempts; i++) {
			const guessTile = document.getElementById(`guess${i}`);
			const guessData = savedState.guessHistory[i - 1];
			guessTile.className = guessData.className;
			guessTile.innerHTML = '';

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
		}

		if (hintUsed) {
			document.getElementById('hint').innerText = `💡 Hint: ${currentGame.hint}`;
		}
		if (categoryRevealed || gameWon) {
			document.getElementById('category').innerText = `Category: ${currentGame.category}`;
		}

		if (attemptsLeft === 0 || gameWon) {
			endGame();
		} 
        else {
			document.getElementById('message').innerText = savedState.message || '';
			document.getElementById('attempts').innerText = `Attempts left: ${attemptsLeft}`;
			document.getElementById('guess-input').disabled = false;
			document.querySelector('.btn-submit').disabled = false;
			document.querySelector('.btn-hint').disabled = false;
			document.querySelector('.btn-category').disabled = false;
		}
	} 
    else {
		resetGameState();
	}
	currentScore = parseInt(localStorage.getItem('currentScore')) || 0;
	highScore = parseInt(localStorage.getItem('highScore')) || 0;
	streak = parseInt(localStorage.getItem('streak')) || 0;
	lifetimeHintsUsed = parseInt(localStorage.getItem('lifetimeHintsUsed')) || 0;

	document.getElementById('current-score').innerText = currentScore;
	document.getElementById('high-score').innerText = highScore;
	document.getElementById('streak').innerText = streak;
	document.getElementById('lifetime-hints-used').innerText = lifetimeHintsUsed;
}


function switchMode(mode) {
    if (currentMode === mode) return;

    currentMode = mode;

    document.getElementById('daily-mode-btn').classList.remove('active');
    document.getElementById('practice-mode-btn').classList.remove('active');

    if (mode === 'daily') {
        document.getElementById('daily-mode-btn').classList.add('active');
        startGame();
    } 
    else {
        document.getElementById('practice-mode-btn').classList.add('active');
        startGame();
    }
}

window.onload = startGame;
