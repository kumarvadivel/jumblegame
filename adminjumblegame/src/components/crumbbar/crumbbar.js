import React from 'react';
import authservice from '../../services/authservice';
import '../crumbbar/crumbbar.css';
export default function Crumbbar(props){
    function  logout(e){
        e.preventDefault()
        authservice.logout().then(data=>{
            if(data.logoutstatus){
                window.location.href='/'
            }
        })
    }
        return(
            <div className="crumb flexrow">
                <div className="imar">
                    <img className="ima" src={props.user.currentuser.picture}/>
                </div>
                <div className="dataarea flexrow">
        <span className="he">{props.user.currentuser.name}</span>
        <span className="oj">({props.user.currentuser.email})</span>
                </div>
                <div className="logout">
                    <button className="butt" onClick={logout}>Logout</button>
                </div>
                </div>
        )
}