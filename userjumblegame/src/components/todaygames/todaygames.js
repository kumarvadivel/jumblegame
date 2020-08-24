import React,{useState,useEffect} from 'react';
import './todaygames.css';
import Todaygamecard from '../todaygamecard/todaygamecard';
import Carousel from 'react-bootstrap/Carousel'
import gameservice from '../../service/gameservice';

import Loader from 'react-loader-spinner'
export default function Todaygames(){
    const [index, setIndex] = useState(0);
    const [isdata,setisdata] =useState(false);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
      const [game,setgame]= useState([])

      useEffect(() => {
        gameservice.livegame().then(data=>{
            setgame(data)
            if(data.length==0){
                setisdata(true)
            }
        })
      }, [])
    return(
        <>
        {isdata ? null :
        <div className="scrolling-wrapper ">
            {game.length===0?<div className="todaycard ghhg">
                <Loader className="gre"
            type="TailSpin"
            color="#fc2779"></Loader></div>:game.map(g=><><Todaygamecard game={g}/></>)}
        </div>}
        </>

    )
}