import React from 'react';

import '../todaygamecard/todaygamecard.css';
import Countdown from "react-countdown";
export default function Todaygamecard(props){

    function startgame(event){
        event.preventDefault()
        window.location.href="startgame/"+props.game._id
    }
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
                <Countdown
                        date={props.game.end_time*1000}
                        
                        intervalDelay={1000}
                        precision={3}
                        renderer={(props) => <span className="vg">Game Ends in {props.days===0?null:props.days+"d"} {props.hours}h {props.minutes}m {props.seconds}s</span>}
                    />
                    
                    <button onClick={startgame} className="playnow">PLAY NOW</button>
                </div>
            </div>
        </div>
    )
}