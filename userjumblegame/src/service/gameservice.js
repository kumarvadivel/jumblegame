import React from 'react';

export default {
    livegame:()=>{
        return fetch("http://localhost:5000/api/livegames").then((res)=>res.json()).then(data=>data)
    },
    pastgame:()=>{
        return fetch("http://localhost:5000/api/pastgames").then((res)=>res.json()).then(data=>data)
    },
    cominggame:()=>{
        return fetch("http://localhost:5000/api/cominggames").then((res)=>res.json()).then(data=>data)
    }
}