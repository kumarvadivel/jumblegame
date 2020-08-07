import React,{useEffect,useState} from 'react';
import authservice from '../../services/authservice';
import Crumbbar from '../crumbbar/crumbbar';
import '../newgame/newgame.css'
import Newgameform from '../newgameform/newgameform';
export default function Newgame(){
    const [user,setUser] =useState()
   
    useEffect(async() => {
        //console.log("effect")
       await authservice.verify().then( data=>{
            if(data.currentuser==null){
             window.location.href='/'
            }else{
                
              setUser(data)
            }
        })
    }, [])
    return(
        <>
       {user ?
       <div>
           <Crumbbar user={user}/>
           <Newgameform user={user}/>
       </div> 
       

        :""
    }</>
    )
}