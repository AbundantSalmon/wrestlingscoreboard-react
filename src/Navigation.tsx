import React from 'react';
import './Navigation.css';

type NavigationProps = {
    visibility: boolean;
    totalDisplayMethod: TotalDisplayMethod;
    resetCurrentMatch: () => void;
};

export const Navigation: React.VFC<NavigationProps> = ({ visibility, totalDisplayMethod, resetCurrentMatch }) => {
    console.log("nav: " + visibility);
    console.log(totalDisplayMethod);
    let [totalDisplayState, setTotalDisplayState] = totalDisplayMethod;

    return (
        <div id="navigation" style={visibility ? {} : { visibility: "hidden" }}>
            <button className="navigationButton" id="setMatchButton" onClick={() => setTotalDisplayState({ ...totalDisplayState, playerEntryView: true })}>Set Match</button>
            <button className="navigationButton" id="resetMatchButton" onClick={() => resetCurrentMatch()}>Reset All</button>
            <button className="navigationButton" id="importButton">Import</button>
            <button className="navigationButton" id="fixturesButton">Fixtures</button>
            <button className="navigationButton" id="prevButton">{"<<"}</button>
            <button className="navigationButton" id="nextButton">{">>"}</button>
        </div>
    )
};