import React from 'react';
import {connect} from 'react-redux';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

function StatusSection(props) {
  const { guesses, auralStatus } = props;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guesses.length} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus}/>
    </section>
  );
}
const stateToProps = (state) => {
  return {
    guesses: state.guesses,
    auralStatus: state.auralStatus
  }
}
export default connect(stateToProps)(StatusSection);
