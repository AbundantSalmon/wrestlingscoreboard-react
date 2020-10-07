import React from 'react';
import './App.css';

import { PlayerEntryView } from './PlayerEntryView';
import { MainHeader } from './MainHeader';
//import Timer from 'easytimer.js';

const App: React.VFC = () => {
  return (
    <>
      <MainHeader />
      <PlayerEntryView />
    </>
  );
}

export default App;
