import React from 'react';
import './VictoryScreen.css';

type VictoryScreenProps = {
    visibility: boolean;
};

export const VictoryScreen: React.VFC<VictoryScreenProps> = ({ visibility }) => {

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

            Victory!
        </div>
    )
};

