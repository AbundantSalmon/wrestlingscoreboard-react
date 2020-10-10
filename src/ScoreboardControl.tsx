//Maintain all control logic and interfaces for scoreboard in this file.

import React from 'react';
import './Scoreboard.css';


type PointsControlProps = {
    playerColour: string;
    updateScore: (player: string, score: number) => void;
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
    playerColour: string;
};

export const PenaltyControl: React.VFC<PenaltyControlProps> = ({ playerColour }) => {

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

export const PinControl: React.VFC<PinControlProps> = ({ playerColour }) => {

    return (
        <div className={"pin " + playerColour}>
            <button>Pin!</button>
        </div>
    )
};