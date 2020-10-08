import React from 'react';
import './Scoreboard.css';
import { capitaliseString } from './common';
import { PointsControl, PenaltyControl, PinControl } from './ScoreboardControl';

type ScoreboardProps = {
    visibility: boolean;
    matchPlayerInformationMethod: MatchPlayerInformationMethod;
    matchStateMethod: MatchStateMethod;
};

export const Scoreboard: React.VFC<ScoreboardProps> = ({ visibility, matchPlayerInformationMethod, matchStateMethod }) => {

    const [matchPlayerInformation, setMatchPlayerInformation] = matchPlayerInformationMethod;
    const [matchState, setMatchState] = matchStateMethod;

    return (
        <div id="outer">
            <div id="scoreboard" style={visibility ? {} : { visibility: "hidden" }}>
                <PlayerDataView playerColour="red" matchPlayerInformation={matchPlayerInformation} />
                <MiddleView matchState={matchState} />
                <PlayerDataView playerColour="blue" matchPlayerInformation={matchPlayerInformation} />
                <ScoreBox playerColour="red" />
                <ScoreBox playerColour="blue" />
                <PointsControl playerColour="red" />
                <PointsControl playerColour="blue" />
                <PenaltyControl playerColour="red" />
                <PenaltyControl playerColour="blue" />
                <PinControl playerColour="red" />
                <PinControl playerColour="blue" />
            </div>
        </div>
    )
};

type MiddleViewProps = {
    matchState: MatchState
};

const MiddleView: React.VFC<MiddleViewProps> = ({ matchState }) => {
    const gameType = () => {
        const ageDiv = matchState.age;
        const styleDiv = matchState.style;
        let gameType = "";
        if (styleDiv === "Greco-Roman") {
            gameType = "Senior Greco-Roman";
        } else if (ageDiv === "18-20 yrs" || ageDiv === "21yrs+") {
            gameType = "Senior Freestyle";
        } else {
            gameType = "Junior Freestyle";
        }
        return `${gameType}, ${ageDiv}, ${matchState.weight}kg`;
    };


    return (
        <div className="middle">
            <span id="period">Period 1</span><br />
            <span id="gameType">{gameType()}</span>
            <br />
            <span id="timer">0:00</span>
            <br />
            <button className="timer" id="startTimer" >▶</button>
        </div>
    )
};

type PlayerDataViewProps = {
    playerColour: string;
    matchPlayerInformation: { [playerColor: string]: MatchPlayer };
};

const PlayerDataView: React.VFC<PlayerDataViewProps> = ({ playerColour, matchPlayerInformation }) => {

    return (
        <div className={"playerData " + playerColour} >
            <span className={"firstName " + capitaliseString(playerColour)}>{matchPlayerInformation[playerColour].firstName}</span><br />
            <span className={"lastName " + capitaliseString(playerColour)}>{matchPlayerInformation[playerColour].lastName}</span><br />
            <span className={"clubName " + capitaliseString(playerColour)}>{matchPlayerInformation[playerColour].clubName}</span>
        </div >
    )
};

type ScoreBoxProps = {
    playerColour: string;
};

const ScoreBox: React.VFC<ScoreBoxProps> = ({ playerColour }) => {

    return (
        <div className={"scorebox " + playerColour}>
            <div className={"markerWarning " + capitaliseString(playerColour)}></div>
            <div className={"score " + capitaliseString(playerColour)}>0</div>
            <div className={"shotclock " + capitaliseString(playerColour)}>0:00</div>
        </div>
    )
};