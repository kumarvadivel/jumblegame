import React from 'react';

export default{
    addgame: (data) =>{
        return fetch('api/addgame',{
            method:"post",
            body:JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json()).then(data=>data)
    },
    getgames: ()=>{
        return fetch('api/getgames').then(res=>res.json()).then(data=>data)
    },
    getgame:(data)=>{
        return fetch('http://localhost:5001/api/getgame/'+data).then(res=>res.json()).then(data=>data)
    },
    getusergame:(data)=>{
        return fetch('http://localhost:5001/api/getusergame/'+data).then(res=>res.json()).then(data=>data)
    },
    editgame:(id,data)=>{
        return fetch('http://localhost:5001/api/editgame/'+id,{
            method:"put",
            body:JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res=>res.json()).then(data=>data)
    }
}