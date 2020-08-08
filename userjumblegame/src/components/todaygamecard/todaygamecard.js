import React from 'react';

import '../todaygamecard/todaygamecard.css';

export default function Todaygamecard(props){
    return(
        <div className="todaycard flexcol">
            <div className="topicarea flexrow">
            <img className="gameic" src="https://i.ibb.co/jTq5L4v/il-gamepad-big-3x.png" alt="il-gamepad-big-3x" border="0"/>
                <span className="topic">Today's game</span>
            </div>
            <div className="imgarea">
                <img className="imgban" src={props.game.Game_image}/>
            </div>
            <div className="startarea">
                <div className="tim flexcol">
                    <span className="vg">Game Ends in 22h 33m 55s</span>
                    <button className="playnow">PLAY NOW</button>
                </div>
            </div>
        </div>
    )
}