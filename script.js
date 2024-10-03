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
    document.querySelector('.btn-skip').addEventListener('click', endGame);
    document.querySelector('.btn-skip').style.display = 'none';

    // event listener for 'Enter' key press on the guess input
    document.querySelector('#guess-input').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            submitGuess();
        }
    });

    const accordionToggle = document.querySelector('.accordion-toggle');
    const accordionContent = document.querySelector('.accordion-content');

    accordionContent.classList.add('expanded');

    accordionToggle.addEventListener('click', () => {
        if (accordionContent.classList.contains('expanded')) {
            accordionContent.classList.remove('expanded');
            accordionContent.classList.add('collapsed');
        } 
        else {
            accordionContent.classList.remove('collapsed');
            accordionContent.classList.add('expanded');
        }
        accordionToggle.classList.toggle('active');
    });

    const themeToggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', storedTheme);
    themeToggle.checked = storedTheme === 'dark';

    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownToggle.addEventListener('click', () => {
        if (dropdownContent.classList.contains('expanded')) {
            dropdownContent.classList.remove('expanded');
            dropdownContent.classList.add('collapsed');
        } 
        else {
            dropdownContent.classList.remove('collapsed');
            dropdownContent.classList.add('expanded');
        }
        dropdownToggle.classList.toggle('active');
    });


    //check if user has ever played the game before and show instructions modal if not
    if (!localStorage.getItem('firstTime')) {
        localStorage.setItem('firstTime', 'true');
        document.getElementById('instruction-modal-overlay').style.display = 'flex';
    }
    
    // Show instructions modal
    document.getElementById('instructions-btn').addEventListener('click', function () {
        document.getElementById('instruction-modal-overlay').style.display = 'flex';
    });

    // Close instructions modal
    document.getElementById('instruction-close').addEventListener('click', function () {
        document.getElementById('instruction-modal-overlay').style.display = 'none';
    });

    window.addEventListener('resize', function () {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (window.innerWidth > 768) {
            dropdownContent.classList.remove('expanded');
            dropdownContent.classList.remove('collapsed');
            const accordionContent = document.querySelector('.accordion-content');
            accordionContent.classList.remove('expanded');
            accordionContent.classList.remove('collapsed');
        }
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
    document.querySelector('#guess-input').focus();

    if (currentMode === 'daily') {
        startDailyGame();
    }
    else {
        startPracticeGame();
    }
    generateAndDisplayClues();
}

function startDailyGame() {
    // Check if the player has already played today
    if (lastPlayed === today.toDateString()) {
        loadSavedGame();
        return;
    } 
    else {
        resetGameState();
        generateAndDisplayClues();
        localStorage.setItem('lastPlayed', today.toDateString());
        localStorage.removeItem('gameState');
    }
}

function startPracticeGame() {
    resetGameState();
    generateAndDisplayClues();
}

function generateGuessTile() {
    const guessIndex = totalAttempts - attemptsLeft + 1;
    const guessTile = document.createElement('div');
    guessTile.classList.add('guess-tile');
    guessTile.setAttribute('id', `guess${guessIndex}`);
    document.getElementById('guess-history').appendChild(guessTile);
}

function resetGameState() {
    // Reset game variables
    attemptsLeft = totalAttempts;
    hintUsed = false;
    categoryRevealed = false;
    gameWon = false;
    hintsUsedCount = 0;
    scoreIncrease = 0;

    // Clear UI elements
    document.getElementById('guess-history').innerHTML = ''; // Clearing the guess tiles
    document.getElementById('message').innerText = ''; // Clearing any game messages
    document.getElementById('attempts').innerText = ''; // Resetting the attempts left display
    document.getElementById('hint').innerText = ''; // Clearing any displayed hints
    document.getElementById('category').innerText = ''; // Clearing the category information
    document.getElementById('guess-input').value = ''; // Clearing the input field
    document.getElementById('guess-input').disabled = false; // Enabling the input field

    // Re-enable any buttons that may have been disabled
    document.querySelector('.btn-submit').disabled = false;
    document.querySelector('.btn-hint').disabled = false;
    document.querySelector('.btn-category').disabled = false;
    document.querySelector('.btn-skip').disabled = false;
}



function generateAndDisplayClues() {
    if (currentMode === 'daily') {
        // Generate daily game clues
        const seedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const seed = seedDate.getTime();
        const dayIndex = Math.floor((seed / 86400000)) % gameData.length;
        currentGame = gameData[dayIndex];
    } else {
        // Generate practice game clues
        const randomIndex = Math.floor(Math.random() * gameData.length);
        currentGame = gameData[randomIndex];
    }
    
    // Display clues in the UI
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

    generateGuessTile();

    const guessIndex = totalAttempts - attemptsLeft + 1;
    const guessTile = document.getElementById(`guess${guessIndex}`);
    const icon = document.createElement('div');
    icon.classList.add('icon');
    const guessText = document.createElement('div');
    guessText.classList.add('guess-text');
    guessText.innerText = userGuess;

    guessTile.appendChild(icon);
    guessTile.appendChild(guessText);

    if (userGuess.toLowerCase() === currentGame.answer.toLowerCase()) {
        guessTile.classList.add('correct');
        icon.innerText = '✔';
        document.getElementById('message').style.color = '#44bd32';
        document.getElementById('message').innerText = "Correct! Well done.";
        gameWon = true;
        if (currentMode === 'daily') {
            updateScore();
        }
    } else {
        guessTile.classList.add('incorrect');
        icon.innerText = '✖';
        attemptsLeft--;
        document.getElementById('message').style.color = '#e84118';
        document.getElementById('message').innerText = 'Incorrect guess. Try again!';
        document.getElementById('attempts').innerText = `Attempts left: ${attemptsLeft}`;
    }

    if (currentMode === 'daily') {
        saveGameState();
    }

    if (attemptsLeft === 0 || gameWon) {
        endGame();
    }

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
    document.querySelector('.btn-skip').disabled = true;

    if (hintUsed) {
        document.getElementById('hint').innerText = `💡 Hint: ${currentGame.hint}`;
    }

    if (categoryRevealed) {
        document.getElementById('category').innerText = `Category: ${currentGame.category}`;
    }

    if (currentMode === 'practice') {
        //if the last guess was correct ? guess was correct : guess was incorrect
        document.getElementById('message').style.color = gameWon ? '#44bd32' : '#e84118';
        document.getElementById('message').innerHTML = gameWon 
        ? `Woohoo! The correct answer was: <strong>${currentGame.answer}</strong>` 
        : `Better luck next time! The correct answer was: <strong>${currentGame.answer}</strong>`;
        setTimeout(() => {
            startPracticeGame();
        }, 3000);
    } 
    else {
        showModal();
    }
}


function updateScore() {
    // Calculate score based on attempts left and hints used
    scoreIncrease = (attemptsLeft * 10) - (hintsUsedCount * 5); // Deduct 5 points per hint used
    if (scoreIncrease < 0) scoreIncrease = 0; // Ensure score doesn't go negative
    currentScore += scoreIncrease; // Increment current score
    streak++; // Increment streak

    // Update high score if necessary
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('highScore', highScore);
    }

    // Update DOM
    document.getElementById('current-score').innerText = currentScore;
    document.getElementById('high-score').innerText = highScore;
    document.getElementById('streak').innerText = streak;

    // Save to localStorage
    localStorage.setItem('currentScore', currentScore.toString());
    localStorage.setItem('streak', streak.toString());
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

    document.getElementById('modal-word').innerHTML = `The word was: <span>${currentGame.answer}</span> 🎯`;
    if (gameWon) {
        document.getElementById('modal-hints-used').innerHTML = `You used <span>${hintsUsedCount}</span> hints. 🧠`;
        document.getElementById('modal-score-gained').innerHTML = `<span>${scoreIncrease}</span> points gained! 🎉`;
        document.getElementById('modal-streak').innerHTML = `You're on a <span>${streak}</span> ${streak === 1 ? 'day' : 'days'} streak! 🌟`;
    } else {
        document.getElementById('modal-score-gained').innerText = `Better luck next time!`;
        document.getElementById('modal-streak').innerText = `Your streak has been reset.`;
    }
    document.getElementById('modal-highscore').innerHTML = `High Score: <span>${currentScore}</span>`;
    document.getElementById('modal-title').innerText = gameWon ? 'Woohoo! 🎉' : 'Game Over!';
    document.getElementById('modal-message').innerText = gameWon ? 'Come back tomorrow for another puzzle!' : 'Come back tomorrow to try again on a new puzzle!';
}



function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
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

    const currentGuessCount = totalAttempts - attemptsLeft + 1;
    for (let i = 1; i <= currentGuessCount; i++) {
        const guessTile = document.getElementById(`guess${i}`);
        if (guessTile) {
            const iconElement = guessTile.querySelector('.icon');
            const guessTextElement = guessTile.querySelector('.guess-text');
            gameState.guessHistory.push({
                className: guessTile.className,
                icon: iconElement ? iconElement.innerText : '',
                guessText: guessTextElement ? guessTextElement.innerText : '',
            });
        }
    }
    localStorage.setItem('gameState', JSON.stringify(gameState));
}



function loadSavedGame() {
    const seedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const seed = seedDate.getTime();
    const dayIndex = Math.floor((seed / 86400000)) % gameData.length;
    currentGame = gameData[dayIndex];

    const savedState = JSON.parse(localStorage.getItem('gameState'));
    if (savedState) {
        attemptsLeft = savedState.attemptsLeft;
        hintUsed = savedState.hintUsed;
        categoryRevealed = savedState.categoryRevealed;
        gameWon = savedState.gameWon;
        hintsUsedCount = savedState.hintsUsedCount || 0;
        scoreIncrease = savedState.scoreIncrease || 0;

        document.getElementById('guess-history').innerHTML = '';

        // Recreate guess tiles from saved state
        savedState.guessHistory.forEach((guessData, index) => {
            const guessTile = document.createElement('div');
            guessTile.id = `guess${index + 1}`;
            document.getElementById('guess-history').appendChild(guessTile);

            const classes = guessData.className.split(' ');
            classes.forEach(cls => {
                guessTile.classList.add(cls); // Add each class individually to avoid DOMException
            });

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
        });

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
    } else {
        resetGameState();
    }
}




function switchMode(mode) {
    if (currentMode === mode) return;

    currentMode = mode;

    document.getElementById('daily-mode-btn').classList.remove('active');
    document.getElementById('practice-mode-btn').classList.remove('active');

    if (mode === 'daily') {
        document.getElementById('daily-mode-btn').classList.add('active');
        document.querySelector('.btn-skip').style.display = 'none';
        startGame();
    }
    else {
        document.getElementById('practice-mode-btn').classList.add('active');
        document.querySelector('.btn-skip').style.display = 'unset';
        startGame();
    }
}

window.onload = startGame;
