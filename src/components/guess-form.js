import React from 'react';
import store from '../store';
import {userGuess, updateStatus} from '../actions/index';
import './guess-form.css';

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    store.dispatch(userGuess(value));
    store.dispatch(updateStatus());

    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}
