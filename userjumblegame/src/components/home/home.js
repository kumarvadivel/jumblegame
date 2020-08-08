import React from 'react';
import '../home/home.css';
import Greet from '../greet/greet';
import Todaygames from '../todaygames/todaygames';
import Upnext from '../upnext/upnext';
import Pastgames from '../pastgames/pastgames';
export default function Home(){
    return(
        <div className="homearea">
           <Greet/>
           <Todaygames/>
           <Upnext/>
           <Pastgames/>
        </div>

    )
}