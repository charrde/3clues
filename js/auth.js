// auth.js

import zxcvbn from 'zxcvbn';
import { Storage } from './storage.js';
import { API_BASE_URL } from './constants.js';

export function initAuth(game) {
  const loginBtn = document.getElementById('login-btn');
  const authModalOverlay = document.getElementById('auth-modal-overlay');
  const authCloseBtn = document.getElementById('auth-close');
  const authForm = document.getElementById('auth-form');
  const authModalTitle = document.getElementById('auth-modal-title');
  const authSubmitBtn = document.getElementById('auth-submit');
  const authSwitch = document.getElementById('auth-switch');
  const usernameDisplay = document.getElementById('username-display');
  const userGreeting = document.getElementById('user-greeting');
  const logoutBtn = document.getElementById('logout-btn');
  const authError = document.getElementById('auth-error');
  const passwordInput = document.getElementById('auth-password');
  const confirmPasswordInput = document.getElementById('auth-confirm-password');
  const passwordStrengthDiv = document.getElementById('password-strength');

  let isLoginMode = true;

  // Open modal
  loginBtn.addEventListener('click', () => {
    authModalOverlay.style.display = 'flex';
    resetAuthForm();
  });

  // Close modal
  authCloseBtn.addEventListener('click', () => {
    authModalOverlay.style.display = 'none';
  });

  // Switch between Login and Sign Up
  authSwitch.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'auth-switch-link') {
      e.preventDefault();
      isLoginMode = !isLoginMode;
      updateAuthMode();
    }
  });

  function updateAuthMode() {
    if (isLoginMode) {
      authModalTitle.innerText = 'Login';
      authSubmitBtn.innerText = 'Login';
      confirmPasswordInput.style.display = 'none';
      passwordStrengthDiv.style.display = 'none';
      authSwitch.innerHTML = `Don't have an account? <a href="#" id="auth-switch-link">Sign Up</a>`;
    } else {
      authModalTitle.innerText = 'Sign Up';
      authSubmitBtn.innerText = 'Sign Up';
      confirmPasswordInput.style.display = 'block';
      passwordStrengthDiv.style.display = 'block';
      authSwitch.innerHTML = `Already have an account? <a href="#" id="auth-switch-link">Login</a>`;
    }
    authError.innerText = '';
    authForm.reset();
  }

  // Password Strength Indicator
  passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const result = zxcvbn(password);
    const score = result.score; // 0 to 4

    // Update password strength indicator
    const strengthText = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
    passwordStrengthDiv.innerText = `Strength: ${strengthText[score]}`;
  });

  // Handle form submission
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('auth-username').value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (!username || !password) {
      displayAuthError('Please enter both username and password.');
      return;
    }

    if (!isLoginMode) {
      // Password match validation
      if (password !== confirmPassword) {
        displayAuthError('Passwords do not match.');
        return;
      }

      // Password strength validation
      const result = zxcvbn(password);
      if (result.score < 2) {
        displayAuthError('Please choose a stronger password.');
        return;
      }
    }

    const endpoint = isLoginMode ? '/login' : '/signup';

    // Prepare game data for signup
    let gameData = null;
    if (!isLoginMode) {
      gameData = {
        currentScore: Storage.get('currentScore', 0),
        highScore: Storage.get('highScore', 0),
        streak: Storage.get('streak', 0),
        lifetimeHintsUsed: Storage.get('lifetimeHintsUsed', 0),
      };
    }

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, gameData }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        // Update UI to show logged-in state
        authModalOverlay.style.display = 'none';
        loginBtn.style.display = 'none';
        userGreeting.style.display = 'inline';
        usernameDisplay.innerText = data.username;
        authError.innerText = '';

        // Load user data
        await game.loadUserData();
        game.ui.updateScoreboard({
          currentScore: game.currentScore,
          highScore: game.highScore,
          streak: game.streak,
          lifetimeHintsUsed: game.lifetimeHintsUsed,
        });
      } else {
        displayAuthError(data.message || 'Authentication failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      displayAuthError('An error occurred.');
    }
  });

  // Logout functionality
  logoutBtn.addEventListener('click', async () => {
    try {
      await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Error during logout:', error);
    }

    // Clear frontend state
    loginBtn.style.display = 'inline';
    userGreeting.style.display = 'none';
    usernameDisplay.innerText = '';
    game.resetToLocalData();
    game.ui.updateScoreboard({
      currentScore: game.currentScore,
      highScore: game.highScore,
      streak: game.streak,
      lifetimeHintsUsed: game.lifetimeHintsUsed,
    });
  });

  // Check if user is already logged in
  (async function checkLoggedIn() {
    const isAuthenticated = await game.checkAuthentication();
    if (isAuthenticated) {
      loginBtn.style.display = 'none';
      userGreeting.style.display = 'inline';
      usernameDisplay.innerText = game.username;
    } else {
      loginBtn.style.display = 'inline';
      userGreeting.style.display = 'none';
    }
  })();

  function displayAuthError(message) {
    authError.innerText = message;
  }

  function resetAuthForm() {
    authForm.reset();
    authError.innerText = '';
    passwordStrengthDiv.innerText = '';
    updateAuthMode();
  }
}
