import React, { useState } from 'react';
import './App.css';

import { PlayerEntryView } from './PlayerEntryView';
import { MainHeader } from './MainHeader';
import { Navigation } from './Navigation';
//import Timer from 'easytimer.js';

const initalTotalDisplayState: TotalDisplayState = {
  mainHeader: true,
  navigation: true,
  playerEntryView: false
};

const App: React.VFC = () => {
  const [totalDisplayState, setTotalDisplayState] = useState(initalTotalDisplayState);

  const totalDisplayMethod: TotalDisplayMethod = [totalDisplayState, setTotalDisplayState];
  console.log(totalDisplayMethod);
  return (
    <>
      <MainHeader visibility={totalDisplayState.mainHeader} />
      <Navigation visibility={totalDisplayState.navigation} totalDisplayMethod={totalDisplayMethod} />
      <PlayerEntryView visibility={totalDisplayState.playerEntryView} totalDisplayMethod={totalDisplayMethod} />
    </>
  );
}

export default App;
