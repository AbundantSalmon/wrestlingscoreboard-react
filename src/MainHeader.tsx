import React from 'react';
import './MainHeader.css';

type MainHeaderProps = {

};

export const MainHeader: React.VFC<MainHeaderProps> = () => {
    return (
        <div id="mainHeader">
            <span id="logo"><img alt="Wrestling WA Logo" src="http://wrestlingwa.org/wp-content/uploads/wwa_logo.png" /></span>
            <span id="fedName">Wrestling Western Australia <br /> Scoreboard</span>
        </div>
    )
};