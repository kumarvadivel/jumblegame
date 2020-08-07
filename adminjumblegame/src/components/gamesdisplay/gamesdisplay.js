import React, { Component, useState, useEffect } from 'react';
import gameservice from '../../services/gameservice';
import '../gamesdisplay/gamesdisplay.css'
import Gamebox from '../gamebox/gamebox';

export  default function Gamesdisplay(){
    const [games,setgames]=useState([])

    useEffect(() => {
       gameservice.getgames().then(data=>setgames(data))
    }, [])
    return(
        <>
        <div className="adminarea gfd">
            <div className="topic ytd">Current Games</div>
            <div className="optionarea hg">
            {games.length===0 ? "":games.map((game)=><div><Gamebox game={game} edit={false}></Gamebox></div>)} 
            </div>
            
        </div>
        </>
    )
}