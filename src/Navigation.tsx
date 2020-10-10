import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
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
            <ButtonGroup color="primary" size="large" variant="contained">
                <Button onClick={() => setTotalDisplayState({ ...totalDisplayState, playerEntryView: true })}>Set Match</Button>
                <Button onClick={() => ResetCurrentMatch()}>Reset All</Button>
                <Button disabled>Import</Button>
                <Button disabled>Fixtures</Button>
                <Button disabled>{"<<"}</Button>
                <Button disabled>{">>"}</Button>
            </ButtonGroup>
        </div>
    )
};