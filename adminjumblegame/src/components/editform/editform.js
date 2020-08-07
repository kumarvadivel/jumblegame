import React, { useState } from 'react';
import {useForm} from '@xanderite/react-hook-form'
import '../editform/editform.css';
import {useParams} from 'react-router-dom';
import authservice from '../../services/authservice'
import { useEffect } from 'react';
import gameservice from '../../services/gameservice';
import Crumbbar from '../crumbbar/crumbbar';
import Modal from 'react-modal';
export default function Editform(props){
    const[user,setuser]=useState()
    const [modalIsOpen,setIsOpen] = useState(false);
    const [game,setgame]=useState([]);
    const [i,seti]=useState();
    const [question,setquestion]=useState({});
    const [allquestion,setallquestion]=useState([]);
    const {id}=useParams()
    const { register, handleSubmit, errors } = useForm();
    const {register:questions,handleSubmit:handlequestionsubmit,errors:qerrors}=useForm()
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          padding               : '10vw'
        }
      };
    useEffect(()=>{
        authservice.verify().then(data=>{
            setuser(data)
            
            
        })
        gameservice.getgame(id).then(data=>{
            setgame(data[0])
            setallquestion(data[0].questions)
            
            
        })
    },[])
    function closeModal(){
        setIsOpen(false)
    }
    const onquestionsubmit=(data,e)=>{
        e.preventDefault();
        data["shuffled_answer"] = data.answer.split('').sort(()=>(Math.random()-0.5)).join('');
        allquestion.splice(i,1,data)
        console.log(allquestion)
        setquestion({})
        e.target.reset()

    }
    const gamesubmit=(data,e)=>{
        e.preventDefault();
        data["questions"]=allquestion
        data["creatoremail"]=user.currentuser.email
        console.log(data)
        gameservice.editgame(id,data).then(data=>{
            if(data.ok===1){
                setIsOpen(true)

                setTimeout(()=>{
                    closeModal();
                    window.location.href="/editgame"
                },3000)

            }
        })
    }
   
    const handleClick=ind=>()=>{setquestion(allquestion[ind]);
        seti(ind)
        console.log(i)
    }

            return(
                <>
                {
                    user?
                    <div>
                        <Crumbbar user={user}/>
                    
                        <div className="adminarea">
                            <div className="topic">Edit game</div>
                            <div className="optionarea hg flexrow">
                           
                                    <div className="form1 air">
                                            <span className="title">Game Details</span>
                                            <form  className="flexcol" onClick={handleSubmit(gamesubmit)} >
                                            <div className="flexrow"><label>Gamename</label><span className="err"> *{errors.Game_Name && "This is required"}</span></div>
                                            <input type="text" defaultValue={game.Game_Name} className="inp" placeholder="Game Name" name="Game_Name" ref={register({required: true, maxLength: 80})} />
                                        
                                            <div className="flexrow"><label>Game Description</label><span className="err">*{errors.Description && "This is required"}</span></div>
                                            <input className="inp"  defaultValue={game.Description} type="text" placeholder="Description" name="Description" ref={register({required: true, maxLength: 100})} />
                                            
                                            <div className="flexrow"><label>Game Image link</label><span className="err">*{errors.Game_image && "This is required"}</span></div>
                                            <input type="text" className="inp" defaultValue={game.Game_image} placeholder="Game image link" name="Game_image" ref={register({required: true, minLength: 6, maxLength: 1200})} />
                                            
                                            <div className="flexrow"><label>Start time</label><span className="err">*{errors.start_time && "This is required"}</span></div>
                                            <input type="datetime-local" Value={Date.now()} className="inp" min={new Date().toISOString().split('T')[0]} placeholder="start time" name="start_time" ref={register({required:true})} />
                                            
                                            <div className="flexrow"><label>End time</label><span className="err">*{errors.end_time && "This is required"}</span></div>
                                            <input type="datetime-local" defaultValue={game.end_time} className="inp"  placeholder="End time" name="end_time" ref={register({required:true})} />
                                            <div className="flexrow"><label>Time Per Question<sub>(in seconds)</sub></label><span className="err">*{errors.question_time && "This is required"}</span></div>
                                            <input type="number" defaultValue={game.question_time} className="inp"  placeholder="question time" name="question_time" ref={register({required:true})} />
                                            
                                            <div className="flexrow"><label>Theme color 1</label><span className="err">*{errors.theme_gradient1 && "This is required"}</span></div>
                                            <input type="color" Value={game.theme_gradient1} className="inp" placeholder="theme gradient1" name="theme_gradient1" ref={register({required:true})}/>
                                            
                                            <div className="flexrow"><label>Theme color 2</label><span className="err">*{errors.theme_gradient2 && "This is required"}</span></div>
                                            <input type="color" defaultValue={game.theme_gradient2} placeholder="theme gradient2" className="inp" name="theme_gradient2" ref={register({required:true})}/>
                                            
                                            <input type="submit" className="butt lo" value="Edit Game"/>
                                            </form>
                                    </div>
                                    <div className="form2 air">
                                        <span className="tit">Edit Questions</span>
                                        <form  className="flexcol" onSubmit={handlequestionsubmit(onquestionsubmit)} >
                                        <div className="flexrow"><label>Question</label><span className="err"> *{qerrors.question && "This is required"}</span></div>
                                        <input type="text" defaultValue={question.question} className="inp" placeholder="Question" name="question" ref={questions({required: true, maxLength: 80})} />
                                        
                                        <div className="flexrow"><label>Question Banner link</label><span className="err"> *{qerrors.question_banner && "This is required"}</span></div>
                                        <input type="text" defaultValue={question.question_banner} className="inp" placeholder="Banner image link" name="question_banner" ref={questions({required: true, maxLength: 100})} />
                                        <div className="flexrow"><label>Correct Answer</label><span className="err"> *{qerrors.answer && "This is required"}</span></div>
                                        <input type="text" defaultValue={question.answer} className="inp" placeholder="Answer" name="answer" ref={questions({required: true, minLength: 6, maxLength: 1200})} />
                                        
                                        <input type="submit" className="butt lo" value="Edit Questions" />
                                        </form>
                                    </div>
                                    <div className="flexcol ku">
                                        <span className="tit">Questions</span>
                                        <div className="flexcol">
                                        {allquestion.length===0 ? "":allquestion.map((q,index)=><div className="qbox flexrow"> 
                                        <div className="flexcol gh"><span><strong>{index+1}. Question:</strong>{q.question}</span>
                                        <span><strong>Answer:</strong>{q.answer}</span></div>
                                        <button onClick={handleClick(index)} className="butt df">Edit question</button>
                                        
                                        </div>
                                    )}
                                        </div>
                                    
                                    </div>
                                   
                                    
                                
                            </div>
                    </div> 
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">
                            <img className="ki" src="data:image/png;base64,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"/>
                            <h1>Changes saved successfully</h1>
                    </Modal>
                    </div>
                    :""
                }

                </>
            )
            }
    