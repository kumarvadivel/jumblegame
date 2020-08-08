const mongoose=require('mongoose')


const schema=mongoose.Schema;

const Gameschema=new schema({
    Description:String,
    Game_Name:String,
    creatoremail:String,
    question_time:Number,
    Game_image:String,
    end_time:Number,
    questions:Array,
    start_time:Number,
    theme_gradient1:String,
    theme_gradient2:String,
    Winners : [{type:mongoose.Schema.Types.ObjectId,ref: 'particpants'}]
})

const Gamemodel =mongoose.model('Games',Gameschema);

module.exports=Gamemodel