import React, { useState, useEffect } from 'react';
import gameservice from '../../services/gameservice';
import '../reviewgamedisplay/reviewgamedisplay.css';

export default function Reviewgamedisplay(props){
    const [game,setgame]=useState()
    useEffect(()=>{
        console.log(props.id)
        gameservice.getgame(props.id).then(data=>{
            setgame(data)
            console.log(data)
        })
    },[])
    return(
        <>
        {
            game?
            <div className="adminarea" >
                <div className="topic hy">
                {game[0].Game_Name}
                </div>
                <div className="optionarea flexcol hg lft" style={{background:'linear-gradient('+game[0].theme_gradient1+','+game[0].theme_gradient2+')',
            color:"white"}}>
                   <div className="flexrow">
                       <div className="flexcol qwe jui">
                           <img className="khuh" src={game[0].Game_image}/>
                       </div>
                       <div className="flexcol be qwe">
                       <span className="head">{game[0].Game_Name}</span>
                         <span className=" loc">{game[0].Description}</span>
                       </div>
                       <div className="flexcol be qwe">
                       <span><strong>Start time:</strong>{new Date(game[0].start_time).toLocaleString()} </span>
                    <span className="loc"><strong>End time:</strong>{new Date(game[0].end_time).toLocaleString()} &nbsp; </span>
            
                       </div>
                       <div className="flexcol be qwe">
                       <span><strong>No of Questions:</strong>&nbsp;{game[0].questions.length}</span>
                        <span className="loc"><strong>Time per Question:</strong>&nbsp;{game[0].question_time} Seconds</span>
            
                       </div>
                       <div className="flexcol be qwe">
                            <span><strong>No of Winners:</strong>&nbsp;{game[0].Winners.length}</span>
                            <span className="loc"><strong>Creator:</strong>&nbsp;{game[0].creatoremail}</span>
                       </div>
                        
                   </div>
                   <div className="flexrow">
                       <div className="flexcol kgh">
                        <span className="head">Questions</span>
        {game[0].questions.map((q,index)=><div className="flexcol kie">
            <span className="mxz"><strong>{index+1}.Question:</strong>{q.question}</span>
            <span className="mxz lp"><strong>Answer:</strong>{q.answer}</span>
            </div>)}
                       </div>
                       <div className="flexcol kgh">
                            <span className="head">Quiz Winners</span>
                            
                       </div>
                   </div>
                </div>
            </div> 
            
            
            :""
        }
        </>
    )
}