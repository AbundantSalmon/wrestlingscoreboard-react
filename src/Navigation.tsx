import React from 'react';
import './Navigation.css';

type NavigationProps = {
    visibility: boolean;
    totalDisplayMethod: TotalDisplayMethod;
    ResetCurrentMatch: () => void;
};

export const Navigation: React.VFC<NavigationProps> = ({ visibility, totalDisplayMethod, ResetCurrentMatch }) => {
    console.log("nav: " + visibility);
    console.log(totalDisplayMethod);
    let [totalDisplayState, setTotalDisplayState] = totalDisplayMethod;

    return (
        <div id="navigation" style={visibility ? {} : { visibility: "hidden" }}>
            <button className="navigationButton" id="setMatchButton" onClick={() => setTotalDisplayState({ ...totalDisplayState, playerEntryView: true })}>Set Match</button>
            <button className="navigationButton" id="resetMatchButton" onClick={() => ResetCurrentMatch()}>Reset All</button>
            <button className="navigationButton" id="importButton" disabled style={{ opacity: 0.5 }}>Import</button>
            <button className="navigationButton" id="fixturesButton" disabled style={{ opacity: 0.5 }}>Fixtures</button>
            <button className="navigationButton" id="prevButton" disabled style={{ opacity: 0.5 }}>{"<<"}</button>
            <button className="navigationButton" id="nextButton" disabled style={{ opacity: 0.5 }}>{">>"}</button>
        </div>
    )
};