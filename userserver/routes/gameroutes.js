const express=require('express')
const gamerouter=express.Router();
const game=require('../models/gamemodel')
const winner=require('../models/winner')
var session= require('express-session')




gamerouter.get('/pastgames',(req,res)=>{
    
    game.find({
       end_time:{$lte:Math.round(Date.now()/1000)}
    }).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        console.log("err",error)
    })
    
 
    
})
gamerouter.get('/cominggames',(req,res)=>{
    game.find({
        start_time:{$gte:Math.round(Date.now()/1000)}
    }).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        console.log("err",error)
    })
})
gamerouter.get('/livegames',(req,res)=>{
    game.find({
        start_time:{$lte:Math.round(Date.now()/1000)},
        end_time:{$gte:Math.round(Date.now()/1000)}
    }).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        console.log("err",error)
    })
})

gamerouter.get('/livegame/:id',(req,res)=>{
    game.find({start_time:{$lte:Math.round(Date.now()/1000)},
    end_time:{$gte:Math.round(Date.now()/1000)},_id:req.params.id}).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        console.log("err",error)
    })
})
gamerouter.get('/question/:id/:qno',(req,res)=>{
    game.find({_id:req.params.id}).then((data)=>{
        res.json(data[0].questions[parseInt(req.params.qno)])
    }).catch((error)=>{
        console.log("err",error)
    })
})
gamerouter.post('/verify',(req,res)=>{
    var data=req.body
    if(data.questiondata.answer===data.useranswer){
        if(data.questionlength===data.currentquestion){
            res.json({validationstatus:true,gameend:true})
        }else{
            res.json({validationstatus:true,gameend:false})
        }
    }else{
        res.json({validationstatus:false,gameend:false})
    }
})
gamerouter.post("/addwinner",(req,res)=>{
    var data=req.body
    var win = new winner(data)
    if(!req.session.gamesplayed){
        req.session.gamesplayed=[]
        req.session.gamesplayed.push(data)
    }else{
        req.session.gamesplayed.push(data)
    }
      //  console.log("session empty")
        
        
        req.session.save();

    
    win.save(err=>{
        if(err)
        res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
          return res.status(200).json({
              msg:"winner added successfully",
              status:true,
              ses_data:req.session.gamesplayed
          })
        }
    })
   

})


gamerouter.get('/',(req,res)=>{
   
    req.session.createdat=new Date()
   
    req.session.save()
    res.json({msg:req.session,session:req.sessionID})
})
gamerouter.get('/startgame/:id',(req,res)=>{
    if(!req.session.gameattempts){
       let attempts={
           gameid:req.params.id,
           attempts:1
       }
       req.session.gameattempts=[]
       req.session.gameattempts.push(attempts)
       req.session.save()
    }else{
        if(req.session.gameattempts.some(p=>p.gameid==req.params.id)){
          let index=  req.session.gameattempts.findIndex(p=>p.gameid==req.params.id)
          let data=req.session.gameattempts[index]
          data.attempts=data.attempts+1
          req.session.gameattempts.splice(index,1,data)
            req.session.save()

        }
    }
    res.json({msg:req.session})
})
module.exports=gamerouter