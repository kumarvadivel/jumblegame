import React from 'react';

import '../pastgamecard/pastgamecard.css'


export default function Pastgamescard(props){
    return(
        <div className="upnextcard flexcol">
        <img className="upimg" src={props.game.Game_image}/>
       <span className="vg ha">{props.game.Game_Name}</span>
        </div>
    )
}