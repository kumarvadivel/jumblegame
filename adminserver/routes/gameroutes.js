const express=require('express')
const gamerouter=express.Router();
const game=require('../models/gamemodel')
gamerouter.post('/addgame',(req,res)=>{
    const Game=new game(req.body)

    Game.save((error)=>{
        if(error){
            res.status(500).json({msg:'sorry internal error'})
            return
        }else{
            return res.status(200).json({
                msg:"Game Added successfully"
            })
        }
    })
})
gamerouter.get('/getgames',(req,res)=>{
    game.find({

    }).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        console.log('err:',error)
    })
})
gamerouter.get('/getgame/:id',(req,res)=>{
    game.find({
        _id:req.params.id
    }).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        console.log("error",error)
    })
})
gamerouter.get('/getusergame/:email',(req,res)=>{
    game.find({
        creatoremail:req.params.email
    }).then((data)=>{
        res.json(data);
    }).catch((error)=>{
        console.log("error",error)
    })
})
gamerouter.put('/editgame/:id',(req,res)=>{
    game.update( {
        _id:req.params.id},req.body).then(data=>{
            res.json(data)
        }).catch((error)=>{
            console.log("error",error)
        })
    })

module.exports=gamerouter