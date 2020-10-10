//Maintain all control logic and interfaces for scoreboard in this file.

import { Button } from '@material-ui/core';
import React from 'react';
import './Scoreboard.css';

type PointsControlProps = {
    playerColour: keyof MatchPlayerInformation;
    updateScore: (player: keyof MatchPlayerInformation, score: number) => void;
};

export const PointsControl: React.VFC<PointsControlProps> = ({ playerColour, updateScore }) => {

    return (
        <div className={"points-control " + playerColour}>
            <div className="buttonsRow">
                <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={() => updateScore(playerColour, 5)}>+5</Button>
                <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={() => updateScore(playerColour, 4)}>+4</Button>
                <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={() => updateScore(playerColour, 2)}>+2</Button>
                <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={() => updateScore(playerColour, 1)}>+1</Button>
                <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={() => updateScore(playerColour, -1)}>-1</Button>
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
            <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={() => handleShotClockButton(playerColour)}>Shot Clock</Button>
            <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={() => handleWarningButton(playerColour)}>Warning</Button>
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
            <Button color="primary" size="medium" variant="contained" style={{ color: "white" }} onClick={
                () => {
                    handlePinButton(playerColour);
                }}>Pin!</Button>
        </div>
    )
};