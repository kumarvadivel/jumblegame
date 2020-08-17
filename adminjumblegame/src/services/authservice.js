import React from 'react';

export default {
    verify : () =>{
        return fetch('http://ec2-13-58-164-64.us-east-2.compute.amazonaws.com:5001/api/verify').then(res=>res.json()).then(data =>data)
    },
    logout :() =>{
        return fetch('http://ec2-13-58-164-64.us-east-2.compute.amazonaws.com:5001/api/logout',{credentials:"include"}).then(res=>res.json()).then(data=> data)
    }
}