import { Game } from './game.js';
import { gameData } from './gameData.js';
import { initAuth } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game(gameData);
  initAuth(game);
});
