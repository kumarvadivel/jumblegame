import React,{useState,useEffect} from 'react';
import '../pastgames/pastgames.css';
import Upnextcard from '../upnextcard/upnextcard';
import Pastgamecard from '../pastgamecard/pastgamecard';
import gameservice from '../../service/gameservice';
import Loader from 'react-loader-spinner';
export default function Pastgames(){
    const [game,setgame]=useState([])
    const [isdata,setisdata]= useState(false);
    useEffect(() => {
        gameservice.pastgame().then(data=>{
            setgame(data)
            if(data.length==0){
                setisdata(true)
            }
        })
       
    }, [])
    return(
        <>
        {isdata ? null :
        <div className="pastg gtr flexcol">
            <div className=" flexrow gtr">
            <img className="imgpa" src="https://i.ibb.co/K9fpMLn/pngwave.png" alt="pngwave" border="0"/>
            <span className="tit lk">Past Games</span>
            </div>
            <div className="scrolling-wrapper">
               {game.length===0?<div className="upnextcard opsd">
                       <Loader type="TailSpin" color="#fc2779" className="ggfg"></Loader>
                   </div>:game.map(g=><Pastgamecard game={g}/>)}
                   


                </div>
        </div>}
        </>
    )
}