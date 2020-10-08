import React from 'react';
import './Scoreboard.css';

type ScoreboardProps = {
    visibility: boolean;
};

export const Scoreboard: React.VFC<ScoreboardProps> = ({ visibility }) => {

    return (
        <div id="scoreboard" style={visibility ? {} : { visibility: "hidden" }}>

        </div>
    )
};