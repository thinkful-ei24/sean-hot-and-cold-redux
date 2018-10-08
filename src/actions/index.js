
const USER_GUESS = 'USER_GUESS';
export const userGuess = (number) => ({
  type: USER_GUESS,
  guess: number
});

const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME
});

const UPDATE_STATUS = 'UPDATE_STATUS';
export const updateStatus = () => ({
  type: UPDATE_STATUS
});