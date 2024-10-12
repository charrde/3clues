import { Game } from './game.js';
import { gameData } from './gameData.js';

document.addEventListener("DOMContentLoaded", () => {
    const game = new Game(gameData);
});
