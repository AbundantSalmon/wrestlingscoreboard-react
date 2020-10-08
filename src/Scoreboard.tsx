import React from 'react';
import './Scoreboard.css';
import { capitaliseString } from './common';

type ScoreboardProps = {
    visibility: boolean;
};

export const Scoreboard: React.VFC<ScoreboardProps> = ({ visibility }) => {

    return (
        <div id="outer">
            <div id="scoreboard" style={visibility ? {} : { visibility: "hidden" }}>
                <PlayerDataView playerColour="red" />
                <MiddleView />
                <PlayerDataView playerColour="blue" />
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

};

const MiddleView: React.VFC<MiddleViewProps> = () => {

    return (
        <div className="middle">
            <span id="period">Period 1</span><br />
            <span id="gameType"></span>
            <br />
            <span id="timer">0:00</span>
            <br />
            <button className="timer" id="startTimer" >▶</button>
        </div>
    )
};

type PlayerDataViewProps = {
    playerColour: string;
};

const PlayerDataView: React.VFC<PlayerDataViewProps> = ({ playerColour }) => {

    return (
        <div className={"playerData " + playerColour} >
            <span className={"firstName " + capitaliseString(playerColour)}>FirstName</span><br />
            <span className={"lastName " + capitaliseString(playerColour)}>LastName</span><br />
            <span className={"clubName " + capitaliseString(playerColour)}>ClubName</span>
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

type PointsControlProps = {
    playerColour: string;
};

const PointsControl: React.VFC<PointsControlProps> = ({ playerColour }) => {

    return (
        <div className={"points-control " + playerColour}>
            <div className={"buttonsRow " + playerColour}>
                <button value={4}>+5</button>
                <button value={3}>+4</button>
                <button value={2}>+2</button>
                <button value={1}>+1</button>
                <button value={0}>-1</button>
            </div>
        </div>
    )
};

type PenaltyControlProps = {
    playerColour: string;
};

const PenaltyControl: React.VFC<PenaltyControlProps> = ({ playerColour }) => {

    return (
        <div className={"penalty " + playerColour}>
            <button className="shotclockbtn" id={"shotclockbutton" + playerColour}>Shot clock</button>
            <button className="warning">Warning</button>
        </div>
    )
};

type PinControlProps = {
    playerColour: string;
};

const PinControl: React.VFC<PinControlProps> = ({ playerColour }) => {

    return (
        <div className={"pin " + playerColour}>
            <button>Pin!</button>
        </div>
    )
};