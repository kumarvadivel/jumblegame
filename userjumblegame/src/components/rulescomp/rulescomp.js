import React from 'react';
import '../rulescomp/rulescomp.css';

export default function Rulescomp(){
    return(
        <div className="rulesarea">
            <div className="rulebox flexcol">
                <div className="htp flexrow">
                    <div className="flexcol">
                         <strong>How to Play?</strong>
                    <span className="su">2 steps to be a winner</span>
                    </div>
                    <img className="ktk" src="https://img.icons8.com/bubbles/50/000000/ginger-man-question-mark.png"/>
                   
                </div>
                <div className="htp flexrow">
                    <div className="flexcol">
                    <strong>1. Step1</strong>
                    <span className="su">This is then description of step1</span>
                
                    </div>
                    <img className="fe" src="https://img.icons8.com/cute-clipart/64/000000/left-footprint.png"/>
                
                    </div>
                    <div className="htp flexrow">
                    <div className=" flexcol">
                    <strong>2.Step2</strong>
                    <span className="su">This is then description of step2</span>
                
                    </div>
                    <img className="fe" src="https://img.icons8.com/ios-filled/50/000000/escalator-up.png"/>
                    </div>
             
               

            </div>
        </div>
    )
}