import React from 'react';
import Logo from '../logo.png';


const HomePage = () => {
    return(
        <div className="homepage">
            <img className="mindmap-logo" src={Logo} alt="MindMap Logo"/>

            <button id="myBtn" title="View on GitHub"><a href="https://github.com/shubhamjha25/MindMap" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a></button>
        </div>
    )
}

export default HomePage;