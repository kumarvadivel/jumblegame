import React from 'react';
import '../adminarea/adminarea.css';

export default function Adminarea(){
    function addnewgame(e){
        e.preventDefault()
        window.location.href="/newgame"
    }
    function editexsistinggame(e){
        e.preventDefault()
        window.location.href="/editgame"
    }
    return(
        <div className="adminarea">
            <div className="topic">
                Gamezone
            </div>
            <div className="optionarea">
                <button onClick={addnewgame} className="butt cus">Add New Game</button>
                <button onClick={editexsistinggame} className="butt cus">Edit a Exsisting game</button>
            </div>
            
        </div>
    )
}