import React from 'react';
import {restartGame} from '../actions/index';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import store from '../store';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
  }
}


