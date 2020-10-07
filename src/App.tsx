import React from 'react';
import './App.css';

import { PlayerEntryView } from './PlayerEntryView';
import { MainHeader } from './MainHeader';
import { Navigation } from './Navigation';
//import Timer from 'easytimer.js';

const App: React.VFC = () => {
  return (
    <>
      <MainHeader />
      <Navigation />
      <PlayerEntryView />
    </>
  );
}

export default App;
