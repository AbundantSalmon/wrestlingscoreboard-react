import React, { useState } from 'react';
import './PlayerEntryView.css';
import { capitaliseString } from './common';

const categories: { [index: string]: { [index: string]: { [index: string]: number[] } } } =
{
    // Age only block
    "6-7 yrs": {
        "N/A": {
            "N/A": [19, 23, 27, 35, 42, 53, 66, 73]
        }
    },
    "8-9 yrs": {
        "N/A": {
            "N/A": [23, 27, 35, 42, 53, 66, 73]
        }
    },
    "10-11 yrs": {
        "N/A": {
            "N/A": [23, 27, 35, 42, 53, 66, 73, 85]
        }
    },
    // Age and sex block
    "12-13 yrs": {
        Female: {
            "N/A": [33, 37, 44, 50, 55, 62, 73, 85]
        },
        Male: {
            "N/A": [35, 41, 48, 55, 62, 69, 75, 89]
        },
    },
    "14-15 yrs": {
        Female: {
            "N/A": [35, 40, 45, 50, 55, 60, 65, 70]
        },
        Male: {
            "N/A": [35, 42, 49, 56, 63, 70, 78, 89]
        },
    },
    "16-17 yrs": {
        Female: {
            "N/A": [40, 43, 49, 56, 61, 65, 69, 73]
        },
        Male: {
            "N/A": [48, 55, 62, 69, 74, 86, 92, 110]
        },
    },
    // Age, sex, and male style block
    "18-20 yrs": {
        Female: {
            "N/A": [50, 53, 57, 62, 68, 76, 85],
        },
        Male: {
            Freestyle: [57, 65, 74, 79, 86, 92, 97, 125],
            "Greco-Roman": [60, 67, 77, 87, 97, 130]
        }
    },
    "21yrs+": {
        Female: {
            "N/A": [50, 53, 57, 62, 68, 76, 85],
        },
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
            <div id="playerEntrySubmission">
                <SubmitMatchDetails />
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
    const initalMatchInformation: MatchInformation = {
        mat: "A",
        age: "6-7 yrs",
        gender: "N/A",
        style: "N/A",
        weight: 19
    };

    const [matchInformation, setMatchInformation] = useState(initalMatchInformation);

    const ageOptions = Object.keys(categories).map((value) => <option value={value} key={value}>{value}</option>);
    const genderOptions = Object.keys(categories[matchInformation.age]).map((value) => <option value={value} key={value}>{value}</option>);
    const styleOptions = Object.keys(categories[matchInformation.age][matchInformation.gender]).map((value: string) => <option value={value} key={value}>{value}</option>);
    const weightOptions = categories[matchInformation.age][matchInformation.gender][matchInformation.style].map((value: number) => <option value={value} key={value}>{value}</option>);

    const updateDropDowns = (e: React.ChangeEvent<HTMLSelectElement>, dropDown: string) => {
        //resets every subsequent dropdown to the default 0 index value, forces an update of state to ensure that valid options are stored
        switch (dropDown) {
            case "mat":
                setMatchInformation({ ...matchInformation, mat: e.target.value });
                break;
            case "age":
                {
                    let zeroGender = Object.keys(categories[e.target.value])[0];
                    let zeroStyle = Object.keys(categories[e.target.value][zeroGender])[0];
                    let zeroWeight = categories[e.target.value][zeroGender][zeroStyle][0];
                    setMatchInformation(
                        {
                            ...matchInformation,
                            age: e.target.value,
                            gender: zeroGender,
                            style: zeroStyle,
                            weight: zeroWeight
                        });
                }
                break;
            case "gender":
                {
                    let zeroStyle = Object.keys(categories[matchInformation.age][e.target.value])[0];
                    let zeroWeight = categories[matchInformation.age][e.target.value][zeroStyle][0];
                    setMatchInformation(
                        {
                            ...matchInformation,
                            gender: e.target.value,
                            style: zeroStyle,
                            weight: zeroWeight
                        });
                }
                break;
            case "style":
                {
                    let zeroWeight = categories[matchInformation.age][matchInformation.gender][e.target.value][0];
                    setMatchInformation(
                        {
                            ...matchInformation,
                            style: e.target.value,
                            weight: zeroWeight
                        });
                }
                break;
            case "weight":
                setMatchInformation(
                    {
                        ...matchInformation,
                        weight: parseInt(e.target.value)
                    });
                break;
            default:
                throw new Error("Error: dropdowns");
        }
    }

    return (
        <div className="matchInformation">
            <label htmlFor="mat-select">
                Mat
            <br />
                <select
                    onChange={e => updateDropDowns(e, "mat")}
                    name="mat" id="mat-select">
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
            </label>

            <label htmlFor="age-select">
                Age
            <br />
                <select
                    value={matchInformation.age}
                    onChange={e =>
                        updateDropDowns(e, "age")
                    }
                    name="age" id="age-select">
                    {ageOptions}
                </select>
            </label>

            <label htmlFor="gender-select" style={matchInformation.gender === "N/A" ? { visibility: "hidden" } : {}}>
                Gender
            <br />
                <select
                    value={matchInformation.gender}
                    onChange={e =>
                        updateDropDowns(e, "gender")
                    }
                    name="gender" id="gender-select">
                    {genderOptions}
                </select>
            </label>

            <label htmlFor="style-select" style={matchInformation.style === "N/A" ? { visibility: "hidden" } : {}}>
                Style
            <br />
                <select
                    value={matchInformation.style}
                    onChange={e =>
                        updateDropDowns(e, "style")
                    }
                    name="style" id="style-select">
                    {styleOptions}
                </select>
            </label>

            <label htmlFor="weight-select">
                Weight
            <br />
                <select
                    value={matchInformation.weight}
                    onChange={e =>
                        updateDropDowns(e, "weight")
                    }
                    name="weight" id="weight-select">
                    {weightOptions}
                </select>
            </label>
        </div>
    );

};

type SubmitMatchDetails = {

};

const SubmitMatchDetails: React.VFC<SubmitMatchDetails> = () => {
    return (
        <>
            <button>Confirm</button>
        </>
    );
};