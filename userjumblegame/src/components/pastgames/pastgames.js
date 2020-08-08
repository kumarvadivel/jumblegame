import React from 'react';
import '../pastgames/pastgames.css';
import Upnextcard from '../upnextcard/upnextcard';
import Pastgamecard from '../pastgamecard/pastgamecard';
export default function Pastgames(){
    return(
        <div className="pastg flexcol">
            <div className=" flexrow">
            <img className="imgpa" src="https://i.ibb.co/K9fpMLn/pngwave.png" alt="pngwave" border="0"/>
            <span className="tit lk">Past Games</span>
            </div>
            <div className="scrolling-wrapper nj  ok">
                   <Pastgamecard/>
                   <Pastgamecard/>
                   <Pastgamecard/>
                   


                </div>
        </div>
    )
}