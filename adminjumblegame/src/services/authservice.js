import React from 'react';

export default {
    verify : () =>{
        return fetch('/api/verify').then(res=>res.json()).then(data =>data)
    },
    logout :() =>{
        return fetch('api/logout').then(res=>res.json()).then(data=> data)
    }
}