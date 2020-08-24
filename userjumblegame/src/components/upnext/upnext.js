import React,{useState,useEffect} from 'react';
import '../upnext/upnext.css';
import Upnextcard from '../upnextcard/upnextcard';
import gameservice from '../../service/gameservice';
import Loader from 'react-loader-spinner';
export default function Upnext(){
    const [game,setgame]=useState([]);
    const [isdata,setisdata]= useState(false);
    useEffect(()=>{
        gameservice.cominggame().then(data=>{
            setgame(data)
            if(data.length==0){
                setisdata(true)
            }
        }
            )
    },[])
    return(

        <>
       {isdata ? null: <div className="upnext flexcol">
            <div className="uptop gtr flexcol">
                <div className="flexrow gtr">
                <img className="nextimg" src="https://i.ibb.co/kS5XkFJ/rsz-1-pngtree-purple-neon-arrow-material-4385358.png" alt="rsz-1-pngtree-purple-neon-arrow-material-4385358" border="0"/>
                <span className="tit"> Up Next</span>
                </div>
               
                <div className="scrolling-wrapper ">
                   {game.length===0?<div className="upnextcard opsd">
                       <Loader type="TailSpin" color="#fc2779" className="ggfg"></Loader>
                   </div>:game.map(g=><Upnextcard game={g}/>)}

                </div>
            </div>
        </div>
}
        </>
    )
}