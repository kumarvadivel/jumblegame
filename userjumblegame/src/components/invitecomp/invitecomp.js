import React, { useState } from 'react';
import '../invitecomp/invitecomp.css';
import {useParams} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function Invitecomp(){
    const {id}=useParams()
    const [copied,setcopy]=useState(false);
    const [link,setlink]=useState("localhost:3000/startgame/"+id)
    return(
        <div className="invitearea">
            <div className="invite flexcol">
                <div className="flexrow">
                    <div className="flexcol">
                        <span className="tit">Invite your friends</span>
                        <span className="su qwt">share link to your friends</span>
                    </div>
                    <img className="jg" src="https://cdn4.iconfinder.com/data/icons/general-business/150/Invite-512.png"/>
                </div>
                <div className="flexrow uj">
                    <CopyToClipboard text={link} onCopy={()=>{setcopy(true)
                        setTimeout(()=>{
                            setcopy(false)
                        },2000)}}>
                    <button className="starts hy">Click to copy share link</button>
                    </CopyToClipboard>
                    
                </div>
                {copied? <span style={{color: 'green',textAlign:"center"}} className="tit">Copied to clipboard</span>:null}
                    
            </div>
        </div>
    )
}

