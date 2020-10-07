import React from 'react';
import './Navigation.css';

type NavigationProps = {

};

export const Navigation: React.VFC<NavigationProps> = () => {
    return (
        <div id="navigation">
            <button className="navigationButton" id="setMatchButton">Set Match</button>
            <button className="navigationButton" id="resetMatchButton">Reset All</button>
            <button className="navigationButton" id="importButton">Import</button>
            <button className="navigationButton" id="fixturesButton">Fixtures</button>
            <button className="navigationButton" id="prevButton">{"<<"}</button>
            <button className="navigationButton" id="nextButton">{">>"}</button>
        </div>
    )
};