import React from 'react';
import {Spring} from 'react-spring';
import {Transition} from 'react-transition-group'
import '../gamestartcard/gamestartcard.css'
import {Animate} from 'react-simple-animate';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
export default function Gamestartcard(props){
    function dis(){
        window.location.href='/'
    }
    return(
        <>
       
              <Animate play  duration={0.3} start={{ transform: 'translate(100vw, 0)' }}
                end={{ transform: 'translate(-02vw, 0)' }}>
              <div className="startcard flexcol">
                  {props.cardstate==="success"?<span className="tit">Correct<br/></span>:""}
                            <span className="tit">
                                {props.title}
                            </span>
                            <div className="ppo" >
                            <CountdownCircleTimer 
                                isPlaying
                                duration={props.duration}
                                colors={[
                                ['#004777', 0.33],
                                ['#F7B801', 0.33],
                                ['#A30000', 0.33],
                                ]}>
                                {({ remainingTime }) => <div className="timer">
                                       
                                        <div className="value">{remainingTime}</div>
                                        <div className="text">seconds</div>
                                        </div>
                                }
                            </CountdownCircleTimer>
                            </div>
                            <span onClick={dis} className="tit lou"> X Dissmiss</span>
                            
                        </div>
                    
              </Animate>
                        
                

        </>
       
    )
}
