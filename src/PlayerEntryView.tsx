import React, { VFC } from 'react';
import './PlayerEntryView.css';
import { capitaliseString } from './common';

const categories =
{
    // Age only block
    "6-7 yrs": [19, 23, 27, 35, 42, 53, 66, 73],
    "8-9 yrs": [23, 27, 35, 42, 53, 66, 73],
    "10-11 yrs": [23, 27, 35, 42, 53, 66, 73, 85],
    // Age and sex block
    "12-13 yrs": {
        Female: [33, 37, 44, 50, 55, 62, 73, 85],
        Male: [35, 41, 48, 55, 62, 69, 75, 89]
    },
    "14-15 yrs": {
        Female: [35, 40, 45, 50, 55, 60, 65, 70],
        Male: [35, 42, 49, 56, 63, 70, 78, 89]
    },
    "16-17 yrs": {
        Female: [40, 43, 49, 56, 61, 65, 69, 73],
        Male: [48, 55, 62, 69, 74, 86, 92, 110]
    },
    // Age, sex, and male style block
    "18-20 yrs": {
        Female: [50, 53, 57, 62, 68, 76, 85],
        Male: {
            Freestyle: [57, 65, 74, 79, 86, 92, 97, 125],
            "Greco-Roman": [60, 67, 77, 87, 97, 130]
        }
    },
    "21yrs+": {
        Female: [50, 53, 57, 62, 68, 76, 85],
        Male: {
            Freestyle: [57, 65, 74, 79, 86, 92, 97, 125],
            "Greco-Roman": [60, 67, 77, 87, 97, 130]
        }
    }
}

type PlayerEntryViewProps = {

};

export const PlayerEntryView: React.VFC<PlayerEntryViewProps> = () => {
    return (
        <form className="playerEntryView">
            <div>
                <h1>Match Details</h1>
            </div>
            <div id="playerEntryMain">
                <PlayerEntry playerColour={"red"} />
                <PlayerEntry playerColour={"blue"} />
                <MatchInformation />
            </div>
        </form>
    );

};

type PlayerEntryProps = {
    playerColour: string;

};

const PlayerEntry: React.VFC<PlayerEntryProps> = ({ playerColour }) => {
    return (
        <div className={"playerEntry " + playerColour}>
            <label>
                {capitaliseString(playerColour)}'s First Name<br /> <input type="text"></input>
            </label>
            <label>
                {capitaliseString(playerColour)}'s Last Name<br /> <input type="text"></input>
            </label>
            <label>
                {capitaliseString(playerColour)}'s Club Name<br /> <input type="text"></input>
            </label>
        </div>
    );

};

type MatchInformationProps = {

};

const MatchInformation: React.VFC<MatchInformationProps> = () => {
    return (
        <div className="matchInformation">
            <label htmlFor="mat-select">Mat</label>
            <br />
            <select name="mat" id="mat-select">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>

            <label htmlFor="age-select">Age</label>
            <br />
            <select name="age" id="age-select">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>

            <label htmlFor="gender-select">Gender</label>
            <br />
            <select name="gender" id="gender-select">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>

            <label htmlFor="style-select">Style</label>
            <br />
            <select name="style" id="style-select">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>

            <label htmlFor="weight-select">Weight</label>
            <br />
            <select name="weight" id="weight-select">
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        </div>
    );

};