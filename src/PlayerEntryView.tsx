import React, { useContext, useState } from 'react';
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
    visibility: boolean;
    totalDisplayMethod: TotalDisplayMethod;
    matchStateMethod: MatchStateMethod;
    matchPlayerInformationMethod: MatchPlayerInformationMethod;
};

const ContextTotalDisplayMethod = React.createContext<TotalDisplayMethod>(undefined!);

export const PlayerEntryView: React.VFC<PlayerEntryViewProps> = ({ visibility, totalDisplayMethod, matchStateMethod, matchPlayerInformationMethod }) => {
    //Store the state of the entered match information
    const initialMatchInformation: MatchInformation = {
        mat: "A",
        age: "6-7 yrs",
        gender: "N/A",
        style: "N/A",
        weight: 19
    };
    const [matchInformation, setMatchInformation] = useState(initialMatchInformation);
    //Store the state of the entered player information
    const initialPlayerEntries: { [playerColor: string]: MatchPlayer } = {
        "red": {
            "playerColor": "red",
            "firstName": "Red First Name",
            "lastName": "",
            "clubName": "",
            "warnings": 0,
            "score": 0
        },
        "blue": {
            "playerColor": "blue",
            "firstName": "Blue First Name",
            "lastName": "",
            "clubName": "",
            "warnings": 0,
            "score": 0
        }
    }

    const [playerEntries, setPlayerEntries] = useState(initialPlayerEntries);

    const setDetails = () => {
        //set the matchInformation to the matchState, playerInformation from the App Component and close the playerEntryView
        const [matchState, setMatchState] = matchStateMethod;
        const [, setMatchPlayerInformation] = matchPlayerInformationMethod;
        const [totalDisplayState, setTotalDisplayState] = totalDisplayMethod;

        //determine game type
        const gameType = () => {
            let gameType = "";
            if (matchInformation.style === "Greco-Roman") {
                gameType = "Senior Greco-Roman";
            } else if (matchInformation.age === "18-20 yrs" || matchInformation.age === "21yrs+") {
                gameType = "Senior Freestyle";
            } else {
                gameType = "Junior Freestyle";
            }
            return gameType;
        }

        const theGameType = gameType();

        let initialTimerValue = "";

        if (theGameType === "Junior Freestyle") {
            initialTimerValue = "2:00";
        } else {
            initialTimerValue = "3:00";
        }


        setMatchState({ ...matchState, ...matchInformation, playersSet: true, currentTime: initialTimerValue, gameType: theGameType });
        const copyPlayerEntries = { ...playerEntries };
        setMatchPlayerInformation(copyPlayerEntries);
        setTotalDisplayState({ ...totalDisplayState, playerEntryView: false });

    }

    return (

        < div style={visibility ? {
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#8080807E",

        }
            : { display: "none" }}>
            <div className="playerEntryView" id="playerEntryView">
                <div>
                    <h1>Match Details</h1>
                </div>
                <div id="playerEntryMain">
                    <PlayerEntry playerColour={"red"} playerEntries={playerEntries} setPlayerEntries={setPlayerEntries} />
                    <PlayerEntry playerColour={"blue"} playerEntries={playerEntries} setPlayerEntries={setPlayerEntries} />
                    <MatchInformation matchInformation={matchInformation} setMatchInformation={setMatchInformation} />
                </div>
                <div id="playerEntrySubmission">
                    <ContextTotalDisplayMethod.Provider value={totalDisplayMethod}>
                        <SubmitMatchDetails setDetails={setDetails} />
                    </ContextTotalDisplayMethod.Provider>
                </div>
            </div>
        </div>

    );

};

type PlayerEntryProps = {
    playerColour: string;
    playerEntries: { [playerColor: string]: MatchPlayer };
    setPlayerEntries: React.Dispatch<React.SetStateAction<{ [playerColor: string]: MatchPlayer }>>;
}

const PlayerEntry: React.VFC<PlayerEntryProps> = ({ playerColour, playerEntries, setPlayerEntries }) => {
    return (
        <div className={"playerEntry " + playerColour}>
            <label>
                {capitaliseString(playerColour)}'s First Name<br />
                <input type="text" value={playerEntries[playerColour].firstName} onChange={e => {
                    const newPlayerEntry = { ...playerEntries };
                    newPlayerEntry[playerColour].firstName = e.target.value;
                    setPlayerEntries(newPlayerEntry as MatchPlayerInformation);
                }} />
            </label>
            <label>
                {capitaliseString(playerColour)}'s Last Name<br />
                <input type="text" value={playerEntries[playerColour].lastName} onChange={e => {
                    const newPlayerEntry = { ...playerEntries };
                    newPlayerEntry[playerColour].lastName = e.target.value;
                    setPlayerEntries(newPlayerEntry as MatchPlayerInformation);
                }} />
            </label>
            <label>
                {capitaliseString(playerColour)}'s Club Name<br />
                <input type="text" value={playerEntries[playerColour].clubName} onChange={e => {
                    const newPlayerEntry = { ...playerEntries };
                    newPlayerEntry[playerColour].clubName = e.target.value;
                    setPlayerEntries(newPlayerEntry as MatchPlayerInformation);
                }} />
            </label>
        </div>
    );

};

type MatchInformationProps = {
    matchInformation: MatchInformation;
    setMatchInformation: React.Dispatch<React.SetStateAction<MatchInformation>>;
};

const MatchInformation: React.VFC<MatchInformationProps> = ({ matchInformation, setMatchInformation }) => {
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
    setDetails: () => void;
};

const SubmitMatchDetails: React.VFC<SubmitMatchDetails> = ({ setDetails }) => {
    const totalDisplayMethod = useContext(ContextTotalDisplayMethod);
    const [totalDisplayState, setTotalDisplayState] = totalDisplayMethod;
    return (
        <>
            <button onClick={setDetails}>Confirm</button>
            <button onClick={() => setTotalDisplayState({ ...totalDisplayState, playerEntryView: false })}>Cancel</button>
        </>
    );
};