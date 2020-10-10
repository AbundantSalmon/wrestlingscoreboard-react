import React from 'react';
import './VictoryScreen.css';

type VictoryScreenProps = {
    visibility: boolean;
    victoryState: VictoryState;
    SetVisibilityOf: (component: string, state: boolean) => void;
};

export const VictoryScreen: React.VFC<VictoryScreenProps> = ({ visibility, victoryState, SetVisibilityOf }) => {
    const victoryScreenView = () => {
        if (victoryState.playerColour === "draw") {
            return (
                <div className="victoryScreenView" style={{ backgroundColor: "black" }}>
                    <p>Draw!</p>
                    <button onClick={() => SetVisibilityOf("victoryScreen", false)}>OK</button>
                </div>
            );
        } else {
            return (
                <div className="victoryScreenView" style={victoryState.playerColour === "red" ? { backgroundColor: "red" } : { backgroundColor: "blue" }}>
                    <p>{victoryState.playerName} <br /> wins by <br /> {victoryState.reason}</p>
                    <button onClick={() => SetVisibilityOf("victoryScreen", false)}>OK</button>
                </div>
            );
        }
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
            {victoryScreenView()}
        </div>
    )
};

