import React,{useState,useEffect} from 'react';
import '../upnext/upnext.css';
import Upnextcard from '../upnextcard/upnextcard';
import gameservice from '../../service/gameservice';

export default function Upnext(){
    const [game,setgame]=useState([]);

    useEffect(()=>{
        gameservice.cominggame().then(data=>setgame(data))
    },[])
    return(
        <div className="upnext flexcol">
            <div className="uptop flexcol">
                <div className="flexrow">
                <img className="nextimg" src="https://i.ibb.co/kS5XkFJ/rsz-1-pngtree-purple-neon-arrow-material-4385358.png" alt="rsz-1-pngtree-purple-neon-arrow-material-4385358" border="0"/>
                <span className="tit"> Up Next</span>
                </div>
               
                <div className="scrolling-wrapper nj">
                   {game.length===0?"":game.map(g=><Upnextcard game={g}/>)}

                </div>
            </div>
        </div>
    )
}