import React from 'react';

export default {
    livegame:()=>{
        return fetch("http://localhost:8080/api/livegames",{credentials:'include'}).then((res)=>res.json()).then(data=>data)
    },
    pastgame:()=>{
        return fetch("http://localhost:8080/api/pastgames",{credentials:'include'}).then((res)=>res.json()).then(data=>data)
    },
    cominggame:()=>{
        return fetch("http://localhost:8080/api/cominggames",{credentials:'include'}).then((res)=>res.json()).then(data=>data)
    },
    livegameid:(data)=>{
        return fetch("http://localhost:8080/api/livegame/"+data,{credentials:'include'}).then((res)=>res.json()).then(data=>data)
    },
    getquestion:(id,qno)=>{
        return fetch("http://localhost:8080/api/question/"+id+"/"+qno,{credentials:'include'}).then((res)=>res.json()).then(data=>data)
    },
    verify:(data)=>{
        return fetch("http://localhost:8080/api/verify",{
            method:'post',
            body:JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            },credentials:"include"
        }).then(res=>res.json()).then(data=>data)
    },
    addwinner:(data)=>{
        return fetch("http://localhost:8080/api/addwinner",{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                'Content-Type' : 'application/json'
            },credentials:"include"
        }).then(res=>res.json()).then(data=>data)
    },

    createsession:()=>{
        return fetch("http://localhost:8080/api/",{credentials:'include'}).then(res=>res.json()).then(data=>data)
    },
    gamestart:(id)=>{
           return fetch("http://localhost:8080/api/startgame/"+id,{credentials:'include'}).then(res=>res.json()).then(data=>data) 
    }
}