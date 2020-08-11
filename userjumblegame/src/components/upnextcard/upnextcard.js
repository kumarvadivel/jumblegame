import React from 'react';

import '../upnextcard/upnextcard.css';
import Countdown from "react-countdown";
export default function Upnextcard(props){
    return(
        <div className="upnextcard flexcol">
        <img className="upimg" src={props.game.Game_image}/>
        <Countdown date={props.game.start_time*1000} intervalDelay={1000} precision={3} renderer={(props) => <button className="starts">Starts  in {props.days}d {props.hours}h {props.minutes}m {props.seconds}s</button>}/>
       
        </div>
    )
}