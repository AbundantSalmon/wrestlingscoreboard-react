import React, { useState } from 'react';
import './App.css';

import { PlayerEntryView } from './PlayerEntryView';
import { MainHeader } from './MainHeader';
import { Navigation } from './Navigation';
import { Scoreboard } from './Scoreboard';

//import Timer from 'easytimer.js';

const initalTotalDisplayState: TotalDisplayState = {
  mainHeader: true,
  navigation: true,
  playerEntryView: false,
  scoreboard: true,
};

const initalMatchPlayerInformation: MatchPlayerInformation = {
  red: {
    "playerColor": "red",
    "firstName": "firstName",
    "lastName": "lastName",
    "clubName": "clubName"
  },
  blue: {
    "playerColor": "blue",
    "firstName": "firstName",
    "lastName": "lastName",
    "clubName": "clubName"
  }
};

const initalMatchState: MatchState = {
  mat: "",
  age: "",
  gender: "",
  style: "",
  weight: 0,
  playersSet: false,
  started: false,
};

const App: React.VFC = () => {
  const [totalDisplayState, setTotalDisplayState] = useState(initalTotalDisplayState);
  const totalDisplayMethod: TotalDisplayMethod = [totalDisplayState, setTotalDisplayState];

  const [matchPlayerInformation, setMatchPlayerInformation] = useState(initalMatchPlayerInformation);
  const matchPlayerInformationMethod: MatchPlayerInformationMethod = [matchPlayerInformation, setMatchPlayerInformation]

  const [matchState, setMatchState] = useState(initalMatchState);
  const matchStateMethod: MatchStateMethod = [matchState, setMatchState];

  console.log(matchState);
  console.log(matchPlayerInformation);

  return (
    <>
      <MainHeader visibility={totalDisplayState.mainHeader} />
      <Navigation visibility={totalDisplayState.navigation} totalDisplayMethod={totalDisplayMethod} />
      <PlayerEntryView visibility={totalDisplayState.playerEntryView} totalDisplayMethod={totalDisplayMethod} matchStateMethod={matchStateMethod} matchPlayerInformationMethod={matchPlayerInformationMethod} />
      <Scoreboard visibility={totalDisplayState.scoreboard} matchPlayerInformationMethod={matchPlayerInformationMethod} matchStateMethod={matchStateMethod} />
    </>
  );
}

export default App;
