import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import Crumbbar from '../crumbbar/crumbbar';
import authservice from '../../services/authservice';
import Reviewgamedisplay from '../reviewgamedisplay/reviewgamedisplay';

export default function Reviewgame(){
    const [user,setUser] =useState()
    const {id}=useParams()
    useEffect(() => {
        console.log("effect")
        authservice.verify().then( data=>{
            if(data.currentuser==null){
             window.location.href='/'
            }else{
                
              setUser(data)
            }
        })
    }, [])
    return(
        <>
        {
            user ?<div>
                <Crumbbar user={user}/>
                <Reviewgamedisplay id={id}/>
            </div>:""
        }
            
        </>
    )
}