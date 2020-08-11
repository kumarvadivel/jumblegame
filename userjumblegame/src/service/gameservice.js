import React from 'react';

export default {
    livegame:()=>{
        return fetch("http://localhost:8080/api/livegames").then((res)=>res.json()).then(data=>data)
    },
    pastgame:()=>{
        return fetch("http://localhost:8080/api/pastgames").then((res)=>res.json()).then(data=>data)
    },
    cominggame:()=>{
        return fetch("http://localhost:8080/api/cominggames").then((res)=>res.json()).then(data=>data)
    },
    livegameid:(data)=>{
        return fetch("http://localhost:8080/api/livegame/"+data).then((res)=>res.json()).then(data=>data)
    },
    getquestion:(id,qno)=>{
        return fetch("http://localhost:8080/api/question/"+id+"/"+qno).then((res)=>res.json()).then(data=>data)
    },
    verify:(data)=>{
        return fetch("http://localhost:8080/api/verify",{
            method:'post',
            body:JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json()).then(data=>data)
    },
    addwinner:(data)=>{
        return fetch("http://localhost:8080/api/addwinner",{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json()).then(data=>data)
    }
}