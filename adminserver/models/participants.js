const mongoose =require('mongoose')


const schema=mongoose.Schema;
const participantsschema=new schema({
    participant_email:String,
    participant_sessionId:String,
    Date:{
        default:new Date()
    },
    completion_time:Number
})