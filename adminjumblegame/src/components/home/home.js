import React,{useState, useEffect} from 'react';
//import {AuthContext} from '../../context/authcontext';
import authservice from '../../services/authservice';
import '../home/home.css'
import Crumbbar from '../crumbbar/crumbbar';
import Adminarea from '../adminarea/adminarea';
import Gamesdisplay from '../gamesdisplay/gamesdisplay';
export default function Home() {
    
   
    const [user,setUser] =useState()
   
       useEffect(() => {
           
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

            {user?
            <div>
            <Crumbbar user={user}/>
            <Adminarea/>
            <Gamesdisplay/>
            </div>
            :""}
            </>
        )
    
       

        
    
}