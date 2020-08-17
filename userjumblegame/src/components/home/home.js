import React,{useEffect} from 'react';
import '../home/home.css';
import Greet from '../greet/greet';
import Todaygames from '../todaygames/todaygames';
import Upnext from '../upnext/upnext';
import Pastgames from '../pastgames/pastgames';
import gameservice from '../../service/gameservice';
export default function Home(){

    useEffect(()=>{
        gameservice.createsession().then(data=>console.log(data))
    })
    return(
        <div className="homearea">
           <Greet/>
           <Todaygames/>
           <Upnext/>
           <Pastgames/>
        </div>

    )
}