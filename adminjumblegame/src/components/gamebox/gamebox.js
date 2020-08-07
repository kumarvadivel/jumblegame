import React from 'react';
import '../gamebox/gamebox.css';

export default function Gamebox(props){
    function review(){
        window.location.href='/game/'+props.game._id
    }
    function editgame(){
       window.location.href='/edit/'+props.game._id
    }
    return(
        <div className="gamebox flexrow">
            <div className="flexcol be">
                <span className="head">{props.game.Game_Name}</span>
                <span className="kas">{props.game.Description}</span>
            </div>
            <div className="flexcol be">
                <span><strong>Start time:</strong>{props.game.start_time.substr(0,10)} &nbsp; {props.game.start_time.substr(11)}</span>
                <span className="loc"><strong>End time:</strong>{props.game.end_time.substr(0,10)} &nbsp; {props.game.end_time.substr(11)}</span>
            </div>
            <div className="flexcol be">
                <span><strong>No of Questions:</strong>{props.game.questions.length}</span>
                <span className="loc"><strong>Time per Question:</strong>{props.game.question_time} Seconds</span>
            </div>
            {props.edit?<div className="flexcol be">
                <button className="butt" onClick={editgame}>Edit game</button>
            </div>:""}
            <div className="flexcol be">
                <button onClick={review} className="butt vg">Review Game</button>
            </div>
        </div>
    )
}