
import {restartGame} from '../reducers/root';

const defaultState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

const getFeedbackMessage = (guess, target) => {

  const guessNum = parseInt(guess, 10);
  if (isNaN(guessNum)) {
    return 'Please enter a valid number';
  }

  const difference = Math.abs(guessNum - target);

  let feedback;
  if (difference >= 50) {
    feedback = 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    feedback = 'You\'re Cold...';
  } else if (difference >= 10) {
    feedback = 'You\'re Warm.';
  } else if (difference >= 1) {
    feedback = 'You\'re Hot!';
  } else {
    feedback = 'You got it!';
  }
  return feedback;
}

const gameReducer = (state=defaultState, action) => {
  console.log(state);
  switch(action.type) {
  case 'USER_GUESS':
    return {
      ...state,
      guesses: [...state.guesses, action.guess],
      feedback: getFeedbackMessage(action.guess, state.correctAnswer)
    };
  case 'RESTART_GAME':
    return {
      ...defaultState,
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  case 'UPDATE_STATUS':
    const pluralize = state.guesses.length !== 1;
    const guesses = state.guesses;
    let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }

    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = state.feedback ? `${state.feedback} | Hot or Cold` : 'Hot or Cold';

    return {
      ...state,
      auralStatus
    };
  default:
    return state;
  }
};

export default gameReducer;