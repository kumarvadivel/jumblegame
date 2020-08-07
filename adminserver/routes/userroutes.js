const express =require('express')
const userrouter=express.Router();
var jwtDecode = require('jwt-decode');
userrouter.get('/login/:token',(req,res)=>{
    let token=req.params.token
    var decoded=jwtDecode(token)
    res.cookie("token",token)
    
    if(decoded.email_verified){
        res.status(200).json({loginstatus:true})
    }else{
        res.status(200).json({error:"invalid login"})
    }
    
})
userrouter.get('/verify',(req,res)=>{
  let token=req.cookies.token
  //console.log(token)
  try {
    var decoded=jwtDecode(token)
  } catch (error) {
      console.log(error)
  }
 

 
    res.status(200).json({currentuser:decoded})

 
    
})
userrouter.get('/logout',(req,res)=>{
    res.clearCookie('token')
    res.status(200).json({logoutstatus:true})

})
module.exports = userrouter;