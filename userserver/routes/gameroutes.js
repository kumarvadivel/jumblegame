const express=require('express')
const gamerouter=express.Router();
const game=require('../models/gamemodel')



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
gamerouter.get('/getdate',(req,res)=>{
   
    var f=Date.now()/1000
    console.log(f)
    res.json({mes:"kkkjkk"})
})

module.exports=gamerouter