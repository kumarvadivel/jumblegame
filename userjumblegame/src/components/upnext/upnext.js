import React from 'react';
import '../upnext/upnext.css';
import Upnextcard from '../upnextcard/upnextcard';


export default function Upnext(){
    return(
        <div className="upnext flexcol">
            <div className="uptop flexcol">
                <div className="flexrow">
                <img className="nextimg" src="https://i.ibb.co/kS5XkFJ/rsz-1-pngtree-purple-neon-arrow-material-4385358.png" alt="rsz-1-pngtree-purple-neon-arrow-material-4385358" border="0"/>
                <span className="tit"> Up Next</span>
                </div>
               
                <div className="scrolling-wrapper nj">
                    <Upnextcard/>
                    <Upnextcard/>

                </div>
            </div>
        </div>
    )
}