import React,{useState,useEffect} from 'react';
import '../pastgames/pastgames.css';
import Upnextcard from '../upnextcard/upnextcard';
import Pastgamecard from '../pastgamecard/pastgamecard';
import gameservice from '../../service/gameservice';
export default function Pastgames(){
    const [game,setgame]=useState([])
    useEffect(() => {
        gameservice.pastgame().then(data=>setgame(data))
       
    }, [])
    return(
        <div className="pastg flexcol">
            <div className=" flexrow">
            <img className="imgpa" src="https://i.ibb.co/K9fpMLn/pngwave.png" alt="pngwave" border="0"/>
            <span className="tit lk">Past Games</span>
            </div>
            <div className="scrolling-wrapper nj  ok">
               {game.length===0?"":game.map(g=><Pastgamecard game={g}/>)}
                   


                </div>
        </div>
    )
}