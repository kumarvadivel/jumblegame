import React, { useState,useEffect } from 'react';
import "../login/login.css"
import GoogleLogin from 'react-google-login';
import authservice from '../../services/authservice';
export default function Login(props){
    // eslint-disable-next-line 
    const [token,settoken] = useState(null)
    useEffect(() => {
       authservice.verify().then(data=>{
           if(data.currentuser){
               window.location.href="/home"
           }
       })
    }, [])
  const responseGoogle=(response)=>{
      // console.log(response)
       //console.log(response.profileObj)
      let t=response.tokenId
      console.log(t)
      fetch("http://localhost:5001/api/login/"+t,{credentials:"include"})
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
         if(data.loginstatus){
            window.location.href="/home"
         }
      })
      
       
   }
    return(
        <div  className="logar">
            <div className="logarea flexcol">
                <span>Welcome to Nykaa game Zone's Admin Console</span>
                <span className="sub">Accessing Console is only restricted to codingmart domain users only</span>

                <div className="oautharea">
                    <GoogleLogin clientId="56045024421-k3h7rg9i6h9jkipitn2o51us1a85189c.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}/>
                </div>
                
            </div>
        </div>
    )
}