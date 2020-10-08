//Maintain all control logic and interfaces for scorebaord in this file.

import React from 'react';
import './Scoreboard.css';




type PointsControlProps = {
    playerColour: string;
};

export const PointsControl: React.VFC<PointsControlProps> = ({ playerColour }) => {

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