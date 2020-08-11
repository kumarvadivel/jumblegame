import React,{useState,useEffect} from 'react';
import './todaygames.css';
import Todaygamecard from '../todaygamecard/todaygamecard';
import Carousel from 'react-bootstrap/Carousel'
import gameservice from '../../service/gameservice';

export default function Todaygames(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
      const [game,setgame]= useState([])

      useEffect(() => {
        gameservice.livegame().then(data=>{
            setgame(data)
            console.log(data)
        })
      }, [])
    return(
        <>
        <div className="scrolling-wrapper ">
            {game.length===0? "":game.map(g=><><Todaygamecard game={g}/></>)}
        </div>
        </>

    )
}