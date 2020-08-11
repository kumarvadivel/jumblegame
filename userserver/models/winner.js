const mongoose =require('mongoose')

const schema=mongoose.Schema;



const Winnerschema= new schema({
    winneremail:String,
    gametime:Number,
    gameid:String
})

const Winnermodel = mongoose.model('Winners',Winnerschema)


module.exports =Winnermodel