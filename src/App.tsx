import React, { useState } from 'react';
import './App.css';
import Timer from 'easytimer.js';

import { PlayerEntryView } from './PlayerEntryView';
import { MainHeader } from './MainHeader';
import { Navigation } from './Navigation';
import { Scoreboard } from './Scoreboard';
import { VictoryScreen } from './VictoryScreen';

const initialTotalDisplayState: TotalDisplayState = {
  mainHeader: true,
  navigation: true,
  playerEntryView: false,
  scoreboard: true,
  victoryScreen: false,
};

const initialMatchPlayerInformation: MatchPlayerInformation = {
  red: {
    "playerColor": "red",
    "firstName": "firstName",
    "lastName": "lastName",
    "clubName": "clubName",
    "warnings": 0,
    "score": 0
  },
  blue: {
    "playerColor": "blue",
    "firstName": "firstName",
    "lastName": "lastName",
    "clubName": "clubName",
    "warnings": 0,
    "score": 0
  }
};

const initialMatchState: MatchState = {
  mat: "",
  age: "",
  gender: "",
  style: "",
  gameType: "",
  weight: 0,
  currentTime: "0:00",
  playersSet: false,
  started: false,
  paused: false,
  phase: "Before Match"
};

const App: React.VFC = () => {
  const [totalDisplayState, setTotalDisplayState] = useState(initialTotalDisplayState);
  const totalDisplayMethod: TotalDisplayMethod = [totalDisplayState, setTotalDisplayState];

  const [matchPlayerInformation, setMatchPlayerInformation] = useState(initialMatchPlayerInformation);
  const matchPlayerInformationMethod: MatchPlayerInformationMethod = [matchPlayerInformation, setMatchPlayerInformation]

  const [matchState, setMatchState] = useState(initialMatchState);
  const matchStateMethod: MatchStateMethod = [matchState, setMatchState];

  const [timer,] = useState(new Timer());

  const ResetCurrentMatch = () => {
    setMatchPlayerInformation({ ...initialMatchPlayerInformation });
    setMatchState({ ...initialMatchState });
    timer.stop();
  };

  const Victory = (player: string, reason: string) => {
    setTotalDisplayState({ ...totalDisplayState, victoryScreen: true })
  }

  console.log(matchState);
  console.log(matchPlayerInformation);

  return (
    <>
      <MainHeader visibility={totalDisplayState.mainHeader} />
      <Navigation visibility={totalDisplayState.navigation} totalDisplayMethod={totalDisplayMethod} ResetCurrentMatch={ResetCurrentMatch} />
      <PlayerEntryView visibility={totalDisplayState.playerEntryView} totalDisplayMethod={totalDisplayMethod} matchStateMethod={matchStateMethod} matchPlayerInformationMethod={matchPlayerInformationMethod} />
      <Scoreboard visibility={totalDisplayState.scoreboard} matchPlayerInformationMethod={matchPlayerInformationMethod} matchStateMethod={matchStateMethod} timer={timer} Victory={Victory} />
      <VictoryScreen visibility={totalDisplayState.victoryScreen} />
    </>
  );
}

export default App;
