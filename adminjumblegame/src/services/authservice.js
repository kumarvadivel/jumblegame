import React from 'react';

export default {
    verify : () =>{
        return fetch('http://localhost:5001/api/verify',{credentials:"include"}).then(res=>res.json()).then(data =>data)
    },
    logout :() =>{
        return fetch('http://localhost:5001/api/logout',{credentials:"include"}).then(res=>res.json()).then(data=> data)
    }
}