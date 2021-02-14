import React from 'react';
import Logo from '../logo.PNG';


const HomePage = () => {
    return(
        <div>
            <img className="mindmap-logo" src={Logo} alt="MindMap Logo"/>

            <button id="myBtn" title="View on GitHub"><a href="https://github.com/shubhamjha25/MindMap" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a></button>
        </div>
    )
}

export default HomePage;