import React,{useState,useEffect} from 'react';
import '../editgame/editgame.css';
import Crumbbar from '../crumbbar/crumbbar';
import authservice from '../../services/authservice';
import gameservice from '../../services/gameservice';
import Gamebox from '../gamebox/gamebox'
export default function Editgame(){

    const [user,setUser] =useState()
    const [games,setgames]= useState()
       useEffect(() => {
           
           authservice.verify().then( data=>{
               if(data.currentuser==null){
                window.location.href='/'
               }else{
                   gameservice.getusergame(data.currentuser.email).then(data=>{
                       setgames(data)
                   })
                 setUser(data)

               }
           })
       }, [])

    return(
        <>
        {
            user ? 
            <div>
                <Crumbbar user={user}/>
                {games?
                    <div className="adminarea klew">
                    <div className="topic ytd">Your Games</div>
                    <div className="optionarea hg">
                        {games.length===0 ? "":games.map((game)=><div><Gamebox game={game} edit={true}></Gamebox></div>)} 
                    </div>
                
            </div>:""
                
                }
               </div> 
             :""
             
        }
        </>
        
    )
}