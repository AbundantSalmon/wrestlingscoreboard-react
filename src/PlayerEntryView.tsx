import React, { useContext, useState } from 'react';
import './PlayerEntryView.css';
import { capitaliseString } from './common';
import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';

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
    const initialPlayerEntries: MatchPlayerInformation = {
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

        // < div style={visibility ? {
        //     top: "0",
        //     left: "0",
        //     width: "100vw",
        //     height: "100vh",
        //     position: "fixed",
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     backgroundColor: "#8080807E",

        // }
        //     : { display: "none" }}>
        //     <div className="playerEntryView" id="playerEntryView">
        //         <div>
        //             <h1>Match Details</h1>
        //         </div>
        //         
        //         
        //     </div>
        // </div>

        <Dialog open={visibility} maxWidth="lg"  >
            <DialogTitle style={{ color: "black" }}>Match Details</DialogTitle>
            <DialogContent>
                <Grid container id="playerEntryMain" spacing={3} alignItems="stretch" direction="row">
                    <Grid item xs={4}>
                        <PlayerEntry playerColour={"red"} playerEntries={playerEntries} setPlayerEntries={setPlayerEntries} />
                    </Grid>
                    <Grid item xs={4}>
                        <PlayerEntry playerColour={"blue"} playerEntries={playerEntries} setPlayerEntries={setPlayerEntries} />
                    </Grid>
                    <Grid item xs={4}>
                        <MatchInformation matchInformation={matchInformation} setMatchInformation={setMatchInformation} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <ButtonGroup color="primary" size="large" variant="contained">
                    <ContextTotalDisplayMethod.Provider value={totalDisplayMethod}>
                        <SubmitMatchDetails setDetails={setDetails} />
                    </ContextTotalDisplayMethod.Provider>
                </ButtonGroup>
            </DialogActions>
        </Dialog>

    );

};

type PlayerEntryProps = {
    playerColour: keyof MatchPlayerInformation;
    playerEntries: MatchPlayerInformation;
    setPlayerEntries: React.Dispatch<React.SetStateAction<MatchPlayerInformation>>;
}

const PlayerEntry: React.VFC<PlayerEntryProps> = ({ playerColour, playerEntries, setPlayerEntries }) => {
    return (
        <Paper className={"playerEntry " + playerColour} elevation={3} style={{ height: "90%" }}>
            <Grid container direction={"column"} spacing={3}>
                <Grid item style={{ color: playerColour, textAlign: "center" }}>
                    {capitaliseString(playerColour)}
                </Grid>
                <Grid item>
                    <TextField label={capitaliseString(playerColour) + "'s First Name"} variant="outlined" value={playerEntries[playerColour].firstName} onChange={e => {
                        const newPlayerEntry = { ...playerEntries };
                        newPlayerEntry[playerColour].firstName = e.target.value;
                        setPlayerEntries(newPlayerEntry);
                    }} />
                </Grid>
                <Grid item>
                    <TextField label={capitaliseString(playerColour) + "'s Last Name"} variant="outlined" value={playerEntries[playerColour].lastName} onChange={e => {
                        const newPlayerEntry = { ...playerEntries };
                        newPlayerEntry[playerColour].lastName = e.target.value;
                        setPlayerEntries(newPlayerEntry);
                    }} />
                </Grid>
                <Grid item>
                    <TextField label={capitaliseString(playerColour) + "'s Club Name"} variant="outlined" value={playerEntries[playerColour].clubName} onChange={e => {
                        const newPlayerEntry = { ...playerEntries };
                        newPlayerEntry[playerColour].clubName = e.target.value;
                        setPlayerEntries(newPlayerEntry);
                    }} />
                </Grid>
            </Grid>
        </Paper>
    );

};

type MatchInformationProps = {
    matchInformation: MatchInformation;
    setMatchInformation: React.Dispatch<React.SetStateAction<MatchInformation>>;
};

const MatchInformation: React.VFC<MatchInformationProps> = ({ matchInformation, setMatchInformation }) => {
    const ageOptions = Object.keys(categories).map((value) => <MenuItem value={value} key={value}>{value}</MenuItem>);
    const genderOptions = Object.keys(categories[matchInformation.age]).map((value) => <MenuItem value={value} key={value}>{value}</MenuItem>);
    const styleOptions = Object.keys(categories[matchInformation.age][matchInformation.gender]).map((value: string) => <MenuItem value={value} key={value}>{value}</MenuItem>);
    const weightOptions = categories[matchInformation.age][matchInformation.gender][matchInformation.style].map((value: number) => <MenuItem value={value.toString()} key={value}>{value}</MenuItem>);

    const updateDropDowns = (e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>, dropDown: string) => {
        //resets every subsequent dropdown to the default 0 index value, forces an update of state to ensure that valid options are stored
        let eTargetValue: string = "";
        if (typeof e.target.value === "string") {
            eTargetValue = e.target.value;
        }
        switch (dropDown) {
            case "mat":
                setMatchInformation({ ...matchInformation, mat: eTargetValue });
                break;
            case "age":
                {
                    let zeroGender = Object.keys(categories[eTargetValue])[0];
                    let zeroStyle = Object.keys(categories[eTargetValue][zeroGender])[0];
                    let zeroWeight = categories[eTargetValue][zeroGender][zeroStyle][0];
                    setMatchInformation(
                        {
                            ...matchInformation,
                            age: eTargetValue,
                            gender: zeroGender,
                            style: zeroStyle,
                            weight: zeroWeight
                        });
                }
                break;
            case "gender":
                {
                    let zeroStyle = Object.keys(categories[matchInformation.age][eTargetValue])[0];
                    let zeroWeight = categories[matchInformation.age][eTargetValue][zeroStyle][0];
                    setMatchInformation(
                        {
                            ...matchInformation,
                            gender: eTargetValue,
                            style: zeroStyle,
                            weight: zeroWeight
                        });
                }
                break;
            case "style":
                {
                    let zeroWeight = categories[matchInformation.age][matchInformation.gender][eTargetValue][0];
                    setMatchInformation(
                        {
                            ...matchInformation,
                            style: eTargetValue,
                            weight: zeroWeight
                        });
                }
                break;
            case "weight":
                setMatchInformation(
                    {
                        ...matchInformation,
                        weight: parseInt(eTargetValue)
                    });
                break;
            default:
                throw new Error("Error: dropdowns");
        }
    }

    return (
        <Paper className="matchInformation" elevation={3}>
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel>Mat</InputLabel>
                        <Select
                            value={matchInformation.mat}
                            onChange={e => updateDropDowns(e, "mat")}
                            label="Mat">
                            <MenuItem value="A">A</MenuItem>
                            <MenuItem value="B">B</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel>Age</InputLabel>
                        <Select
                            value={matchInformation.age}
                            onChange={e => updateDropDowns(e, "age")}
                            label="Age">
                            {ageOptions}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            value={matchInformation.gender}
                            onChange={e => updateDropDowns(e, "gender")}
                            label="Gender">
                            {genderOptions}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel>Style</InputLabel>
                        <Select
                            value={matchInformation.style}
                            onChange={e => updateDropDowns(e, "style")}
                            label="Style">
                            {styleOptions}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl variant="outlined" style={{ width: "100%" }}>
                        <InputLabel>Weight</InputLabel>
                        <Select
                            value={matchInformation.weight}
                            onChange={e => updateDropDowns(e, "weight")}
                            label="Weight">
                            {weightOptions}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
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
            <Button onClick={setDetails}>Confirm</Button>
            <Button onClick={() => setTotalDisplayState({ ...totalDisplayState, playerEntryView: false })}>Cancel</Button>
        </>
    );
};