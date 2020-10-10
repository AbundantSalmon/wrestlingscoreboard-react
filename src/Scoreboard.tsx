import React, { useCallback, useEffect } from 'react';
import './Scoreboard.css';
import { capitaliseString } from './common';
import { PointsControl, PenaltyControl, PinControl } from './ScoreboardControl';
import type Timer from 'easytimer.js';
import '@fortawesome/fontawesome-free/js/all.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const phases = ["Before Match", "Period 1", "Between P1", "Rest", "Between P2", "Period 2", "Match End"];
const timeRest = 30; // should be 30 seconds

type ScoreboardProps = {
    visibility: boolean;
    matchPlayerInformationMethod: MatchPlayerInformationMethod;
    matchStateMethod: MatchStateMethod;
    timer: Timer;
};

export const Scoreboard: React.VFC<ScoreboardProps> = ({ visibility, matchPlayerInformationMethod, matchStateMethod, timer }) => {

    const [matchPlayerInformation, setMatchPlayerInformation] = matchPlayerInformationMethod;
    const [matchState, setMatchState] = matchStateMethod;

    const updateCurrentTime = useCallback(
        () => {
            setMatchState({ ...matchState, currentTime: timer.getTimeValues().toString(['minutes', 'seconds']).slice(1) });
        },
        [matchState, setMatchState, timer],
    );

    const resolveTimerEnd = useCallback(
        () => {
            if (matchState.phase === phases[1]) { //end of first period
                setMatchState({ ...matchState, phase: phases[2], currentTime: "0:00", paused: true });
            } else if (matchState.phase === phases[3]) { //end of rest period
                setMatchState({ ...matchState, phase: phases[4], currentTime: "0:00", paused: true });
            } else if (matchState.phase === phases[5]) { //end of second period
                setMatchState({ ...matchState, phase: phases[6], currentTime: "0:00", paused: true });
            }
        },
        [matchState, setMatchState],
    );

    useEffect(() => {
        console.log("event listener Made!'");
        timer.addEventListener('secondsUpdated', updateCurrentTime);
        timer.addEventListener('targetAchieved', resolveTimerEnd);
        // returned function will be called on component unmount
        return () => {
            timer.removeEventListener('secondsUpdated', updateCurrentTime);
            timer.removeEventListener('targetAchieved', resolveTimerEnd);
        };
    }, [resolveTimerEnd, timer, updateCurrentTime]);

    const updateScore = (player: string, score: number) => {
        //Need to add if timer is running then allow this
        const allowableScoreChanges = [-1, 1, 2, 4, 5];
        if (allowableScoreChanges.includes(score) && matchState.started) {
            const newMatchPlayerInformation: { [playerColor: string]: MatchPlayer } = { ...matchPlayerInformation };
            if (!(newMatchPlayerInformation[player].score === 0 && score < 0)) { //make sure score can't go below 0
                newMatchPlayerInformation[player].score += score;
                setMatchPlayerInformation(newMatchPlayerInformation);
            }
        }
    };

    return (
        <div id="outer">
            <div id="scoreboard" style={visibility ? {} : { visibility: "hidden" }}>
                <PlayerDataView playerColour="red" matchPlayerInformation={matchPlayerInformation} />
                <MiddleView matchState={matchState} setMatchState={setMatchState} timer={timer} />
                <PlayerDataView playerColour="blue" matchPlayerInformation={matchPlayerInformation} />
                <ScoreBox playerColour="red" matchPlayerInformation={matchPlayerInformation} />
                <ScoreBox playerColour="blue" matchPlayerInformation={matchPlayerInformation} />
                <PointsControl playerColour="red" updateScore={updateScore} />
                <PointsControl playerColour="blue" updateScore={updateScore} />
                <PenaltyControl playerColour="red" />
                <PenaltyControl playerColour="blue" />
                <PinControl playerColour="red" />
                <PinControl playerColour="blue" />
            </div>
        </div>
    )
};

type MiddleViewProps = {
    matchState: MatchState;
    timer: Timer;
    setMatchState: React.Dispatch<React.SetStateAction<MatchState>>;
};

const MiddleView: React.VFC<MiddleViewProps> = ({ matchState, timer, setMatchState }) => {

    const playButtonPress = () => {
        let initialTimerValue = 0;
        if (matchState.gameType === "Junior Freestyle") {
            initialTimerValue = 120;
        } else {
            initialTimerValue = 180;
        }

        if (matchState.phase === phases[0] && matchState.playersSet) { //if phase is Before Match
            setMatchState({ ...matchState, phase: phases[1], started: true });
            timer.start({ countdown: true, startValues: { seconds: initialTimerValue } });
        } else if (matchState.phase === phases[2] && matchState.started) { //if between phase but before timer start
            setMatchState({ ...matchState, phase: phases[3], paused: false })
            timer.start({ countdown: true, startValues: { seconds: timeRest } });
        } else if (matchState.phase === phases[4] && matchState.started) { //if period 2 but before timer start
            setMatchState({ ...matchState, phase: phases[5], paused: false })
            timer.start({ countdown: true, startValues: { seconds: initialTimerValue } });
        } else if (matchState.phase === phases[6] && matchState.started) { //if end of period 2
            console.log(`Match has ended`)
        } else if (matchState.started && !matchState.paused) { //pause
            setMatchState({ ...matchState, paused: true })
            timer.pause();
        } else if (matchState.started && matchState.paused) { //unpause
            setMatchState({ ...matchState, paused: false })
            timer.start();
        }
    }

    console.log(matchState.phase + " " + timer.isPaused() + " " + timer.isRunning());
    return (
        <div className="middle" style={matchState.paused ? { backgroundColor: "grey" } : {}}>
            <span id="period">{matchState.phase}</span><br />
            <span id="gameType">{`${matchState.gameType}, ${matchState.age}, ${matchState.weight}kg`}</span>
            <br />
            <span id="timer">{matchState.currentTime}</span>
            <br />
            <button className="timer" id="startTimer" onClick={playButtonPress}>{
                (matchState.phase === "Before Match")
                    ? "▶" : (!matchState.paused) ? <FontAwesomeIcon icon={["fas", "pause"]} /> : (matchState.paused) ? "▶" : "bug"
            }
            </button>
        </div>
    )
};

type PlayerDataViewProps = {
    playerColour: string;
    matchPlayerInformation: { [playerColor: string]: MatchPlayer };
};

const PlayerDataView: React.VFC<PlayerDataViewProps> = ({ playerColour, matchPlayerInformation }) => {

    return (
        <div className={"playerData " + playerColour} >
            <span className={"firstName " + capitaliseString(playerColour)}>{matchPlayerInformation[playerColour].firstName}</span><br />
            <span className={"lastName " + capitaliseString(playerColour)}>{matchPlayerInformation[playerColour].lastName}</span><br />
            <span className={"clubName " + capitaliseString(playerColour)}>{matchPlayerInformation[playerColour].clubName}</span>
        </div >
    )
};

type ScoreBoxProps = {
    playerColour: string;
    matchPlayerInformation: { [playerColor: string]: MatchPlayer };
};

const ScoreBox: React.VFC<ScoreBoxProps> = ({ playerColour, matchPlayerInformation }) => {

    return (
        <div className={"scorebox " + playerColour}>
            <div className={"markerWarning " + capitaliseString(playerColour)}></div>
            <div className={"score " + capitaliseString(playerColour)}>{matchPlayerInformation[playerColour].score}</div>
            <div className={"shotclock " + capitaliseString(playerColour)}>0:00</div>
        </div>
    )
};