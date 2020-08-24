import React,{useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import '../gamearea/gamearea.css'
import gameservice from '../../service/gameservice';
import Countdown from "react-countdown";
import Gamestartcard from '../gamestartcard/gamestartcard';
import {Animate} from 'react-simple-animate';
import {useForm} from 'react-hook-form';
import Pastgames from '../pastgames/pastgames';
export default function Gamearea(){
    const { register, handleSubmit, errors } = useForm();
    let history=useHistory()
    const [fields,setfields]=useState(false)
    const [correct,setcorrect]=useState(false)
    const [wrong,setwrong]=useState(false)
    const [tg1,settg1]=useState(localStorage.getItem("theme_gradient1"))
    const [tg2,settg2]=useState(localStorage.getItem("theme_gradient2"))
    const [gn,setgn]=useState(localStorage.getItem("game_name"))
    const [tpq,settpq]=useState(localStorage.getItem("question_time"))
    const [tt,settt]=useState(localStorage.getItem("temp_time"))
    const [cq,setcq]=useState(localStorage.getItem("current_question"))
    const [tq,settq]=useState(localStorage.getItem("question_length"))
    const [question,setquestion]=useState({})
    const [useranswer,setuseranswer]=useState([])
    
    const [anshistind,setanshistind]=useState([])
    const [fillindex,setfillindex]=useState(0)
    const [suffledanswer, setshuffledanswer]=useState([])
    const {id,qno}=useParams()

    
    const style={
        background:"linear-gradient("+tg1+","+tg2+")",
        minHeight:"97vh"
    }
    function guessindex(){
        if(useranswer.length===0){
           return 0
        }else{
            let a=useranswer.findIndex(check)
         //   console.log(a)
           return a
        }
      
    }
    function check(useranswer){
        return useranswer==""
    }

    useEffect(()=>{

    },[useranswer,suffledanswer])
    useEffect(()=>{
        gameservice.getquestion(id,qno-1).then(data=>{
            console.log(data)
            setquestion(data)
            let su=data.answer.split("")
                console.log("kk",su)
                var letters = /^[A-Za-z]+$/;
            for(var i=0;i<su.length;i++){
                if(su[i].match(letters)){
                    su[i]=""
                }else{

                }
            }
            console.log("gh",su)
            let a=data.shuffled_answer.split("")
            
        setuseranswer(su)
        console.log(useranswer)
            guessindex()
        setshuffledanswer(a)

       
    } )
    },[])
    useEffect(()=>{
        if(qno!==cq){
            window.location.href="/game/"+id+"/"+cq
        }
    })

    function ins(ind,val){
        
       // console.log(ind,val)
        anshistind.splice(fillindex,1,ind)

        setanshistind(anshistind)
       console.log("answer history index",anshistind)
        useranswer.splice(fillindex,1,val)
       // console.log(useranswer)
       setfillindex( guessindex())
        setuseranswer(useranswer)
        suffledanswer.splice(ind,1,"")
        setshuffledanswer(suffledanswer)
        setfillindex( guessindex())
       
        
         
    }
    function rem(ind,ans){
       
        useranswer.splice(ind,1,"")
        console.log("useranswer after removng",useranswer)
        setuseranswer(useranswer)
        suffledanswer.splice(anshistind[ind],1,ans)
        console.log("suffledanswer after removng",suffledanswer)
        setshuffledanswer(suffledanswer)
        
        
        
        
        setfillindex(guessindex())
        anshistind.splice(ind,1,-1)
        
        setanshistind(anshistind)
       console.log("answer history after rmoving",anshistind)
       

    }
    function reset(){
        let su=question.answer.split("")
        console.log("kk",su)
        var letters = /^[A-Za-z]+$/;
    for(var i=0;i<su.length;i++){
        if(su[i].match(letters)){
            su[i]=""
        }else{

        }
    }
    console.log("gh",su)
  //  let a=data.shuffled_answer.split("")
    
setuseranswer(su)
        let a=question.shuffled_answer.split("")
        setshuffledanswer(a)
        setfillindex(0)
        setanshistind([])
    }
    function timerend(){
      
       console.log( useranswer.join(""))
       //submit()

    }
    function submit(){
       
        let data={
            questiondata:question,
            useranswer:useranswer.join(""),
            currentquestion:cq,
            questionlength:localStorage.getItem("question_length")
        }
        gameservice.verify(data).then(data=>{
            if(data.validationstatus && !data.gameend){
                let d=parseInt(qno)+1
                localStorage.setItem("current_question",d)
                localStorage.setItem("temp_time",tpq)
                setcorrect(true)
               
                setTimeout(() => {
                  // history.push('/game/'+id+"/"+d)
                }, 3000);
            }
            else{
                if(data.validationstatus && data.gameend){
                        localStorage.setItem("end",Math.round(Date.now()/1000))
                        setfields(true)
                }else{
                    if(!data.validationstatus && !data.gameend){
                        setwrong(true)
                        endgame()
                        setTimeout(()=>{
                           // history.push("/startgame/"+id)
                        },3000)
                    }
                }
            }
        })
    }
    function endgame(){
        localStorage.removeItem("current_question")
        localStorage.removeItem("theme_gradient2")
        localStorage.removeItem("theme_gradient1")
        localStorage.removeItem("game_name")
        localStorage.removeItem("question_length")
        localStorage.removeItem("question_time")
        localStorage.removeItem("temp_time")
        localStorage.removeItem("start")
        localStorage.removeItem("end")
        
    }

 
    const onSubmit = (data) => {
        let body={
            winneremail:data.useremail,
            gametime:parseInt(localStorage.getItem("end"))-parseInt(localStorage.getItem("start")),
            gameid:id

        }
        gameservice.addwinner(body).then(data=>{
            console.log(data)
            if(data.msg){
                endgame()
                history.push('/')
            }
        })
      };

      function close(){
        endgame()
        history.push('/')
      }
    return(
        <>
         {fields? <div style={style} className="gamearea kok">
         <Animate play  duration={1} start={{ transform: 'translate(300vw, 0)' }}
                end={{ transform: 'translate(-2vw, 0)' }}>
              <div className="startcard bgr flexcol">
                  <span className="tit">Correct<br/></span>
                            <span className="tit">
                                you have answered all question<br/>
                                Enter your email to win prices
                            </span>
                            <div className="ppo aop" >
                            <form className="flexcol yts" onSubmit={handleSubmit(onSubmit)}>
                                 <input placeholder="Enter email" className="inp ghy" name="useremail" ref={register} />
                                 <input type="submit" className="jhw ghe" />
                                </form>
                            </div>
                           
                            
                        </div>
                    
              </Animate>
         </div>:wrong? <div style={style} className="gamearea kok"><Gamestartcard title={"sorry you have answered a question wrong"} duration={3} /></div> :  correct? <div style={style} className="gamearea kok"><Gamestartcard title={"Next question in"} duration={3} cardstate={"success"}/></div>:
        
        question.length ? "":<>  <div style={style} className="gamearea flexcol">
             <div className="flexrow loiu">
                 <i onClick={close} className="fa fa-close kj"></i>

                 <span className="tit jet">{gn}</span>
                 <div className="timerem">
                     <Countdown date={Date.now()+parseInt(tt)*1000}intervalDelay={1000}
                     precision={3}
                     onTick={()=>{ settt(tt-1)
                          localStorage.setItem("temp_time",tt)}}
                     onComplete={timerend}
                     renderer={(props) =><><img className="poi" src="https://i.ibb.co/ssdrJxQ/786-1.gif" alt="786-1" border="0"/> <span className="ge">{props.seconds}s Remaining</span></>}
                 />
                 </div>
                 
             </div>
             <div className="fdsa">
                     <span className="tit qwa"> Questions {cq} of {tq} </span>
                 </div>

             <div className="quesimgar">
                 <img className="wes" src={question.question_banner}/>
             </div>
             <span className="tit">{question.question}</span>
             <div className="filling flexrow">
                     {useranswer.length===0? "": useranswer.map((ans,index)=>ans===""?<div style={{background:tg2,opacity:"90%",border:"1px solid"+tg1,mixBlendMode:"lighten"}}  className="letbox">{ans}</div>:ans==="~"?<div style={{width:"4vw"}}></div>:<div style={{border:"1px solid"+tg1}} onClick={()=>rem(index,ans)} className="letbox">{ans}</div>)}
        
             </div>
             <div className="answerlayer">
            
             </div>
            
          </div>
         <div className="staticarea flexcol">
                  <div className="filling flexrow">
         {suffledanswer.length===0? "": suffledanswer.map((ans,index)=>ans===""?<div style={{background:"blue"}} className="letbox answe">{ans}</div>:<div onClick={()=>ins(index,ans)} style={{border:"1px solid"+tg1}}  className="letbox">{ans}</div>)}

         </div>
         <div className="butareas">
             <button onClick={reset} className="jhw">Reset</button>
             <button onClick={submit} className="jhw lopk">Submit</button>
         </div>
         </div>
        
        </>
        
        
     }
       
        
        </>
    )
}
