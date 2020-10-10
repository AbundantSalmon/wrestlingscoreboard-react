//Maintain all control logic and interfaces for scoreboard in this file.

import React from 'react';
import './Scoreboard.css';

type PointsControlProps = {
    playerColour: keyof MatchPlayerInformation;
    updateScore: (player: keyof MatchPlayerInformation, score: number) => void;
};

export const PointsControl: React.VFC<PointsControlProps> = ({ playerColour, updateScore }) => {

    return (
        <div className={"points-control " + playerColour}>
            <div className={"buttonsRow " + playerColour}>
                <button onClick={() => updateScore(playerColour, 5)}>+5</button>
                <button onClick={() => updateScore(playerColour, 4)}>+4</button>
                <button onClick={() => updateScore(playerColour, 2)}>+2</button>
                <button onClick={() => updateScore(playerColour, 1)}>+1</button>
                <button onClick={() => updateScore(playerColour, -1)}>-1</button>
            </div>
        </div>
    )
};

type PenaltyControlProps = {
    playerColour: keyof MatchPlayerInformation;
    handleWarningButton: (playerColour: keyof MatchPlayerInformation) => void;
    handleShotClockButton: (playerColour: keyof MatchPlayerInformation) => void;
};

export const PenaltyControl: React.VFC<PenaltyControlProps> = ({ playerColour, handleWarningButton, handleShotClockButton }) => {

    return (
        <div className={"penalty " + playerColour}>
            <button className="shotclockbtn" id={"shotclockbutton" + playerColour} onClick={() => handleShotClockButton(playerColour)}>Shot clock</button>
            <button className="warning" onClick={() => handleWarningButton(playerColour)}>Warning</button>
        </div>
    )
};

type PinControlProps = {
    playerColour: keyof MatchPlayerInformation;
    handlePinButton: (playerColour: keyof MatchPlayerInformation) => void;
};

export const PinControl: React.VFC<PinControlProps> = ({ playerColour, handlePinButton }) => {

    return (
        <div className={"pin " + playerColour}>
            <button onClick={
                () => {
                    handlePinButton(playerColour);
                }}>Pin!</button>
        </div>
    )
};