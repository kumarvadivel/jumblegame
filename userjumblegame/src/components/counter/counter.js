import React from 'react';
import Countdown from "react-countdown";
export default function Counter(props){
    function timerend(){
        console.log("question time out")
    }
    return(
        <div className="timerem">
        <Countdown date={Date.now()+parseInt(props.time)*1000}intervalDelay={1000}
        precision={3}
        onComplete={timerend}
        renderer={(props) =><><img className="poi" src="https://i.ibb.co/ssdrJxQ/786-1.gif" alt="786-1" border="0"/> <span className="ge">{props.seconds}s Remaining</span></>}
    />
    </div>
    )
}