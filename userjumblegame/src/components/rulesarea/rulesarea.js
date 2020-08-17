import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom' 
import '../rulesarea/rulesarea.css'
import Greet from '../greet/greet';
import gameservice from '../../service/gameservice';
import Pastgamescard from '../pastgamecard/pastgamecard'
import Pastgames from '../pastgames/pastgames';
import Rulescomp from '../rulescomp/rulescomp';
import Invitecomp from '../invitecomp/invitecomp';
import Gamestartcard from '../gamestartcard/gamestartcard';
export default function Rulesarea(){
    const [start,setstart]=useState(false)
    const [game,setgame]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        gameservice.livegameid(id).then(data=>{setgame(data);console.log(data)})
    },[])
   
 const handleClick=(qlength,gr1,gr2,gn,qt)=>()=>{
     
     gameservice.gamestart(id).then(data=>console.log(data))
      console.log(qlength)
        setstart(true)
       localStorage.setItem("question_length",qlength)
      localStorage.setItem("current_question",1)
      localStorage.setItem("theme_gradient1",gr1)
      localStorage.setItem("theme_gradient2",gr2)
      localStorage.setItem("game_name",gn)
      localStorage.setItem("question_time",qt)
      localStorage.setItem("temp_time",qt)
     
      
        setTimeout(() => {
            localStorage.setItem("start",Math.round(Date.now()/1000))
            
            window.location.href="/game/"+id+"/"+localStorage.getItem("current_question")
        }, 5000);
    }
    return(
        
       <>
           {start ? <div className="rule jju"><Gamestartcard title={"Starts in"} duration={5}/></div> :
           
            <div className="rule">
               
                <Greet setcross={false}></Greet>
                {game.length==0?"":game.map(g=>(
                        <>
                        <Pastgamescard game={g}/>
                        <Rulescomp/>
                        <Invitecomp/>  
                        <div className="des">
                            <button onClick={handleClick(g.questions.length,g.theme_gradient1,g.theme_gradient2,g.Game_Name,g.question_time)}  className="iot">Start game</button>
                        </div>
                        </>
                ))}</div>}
           
           </> 
    )
}
