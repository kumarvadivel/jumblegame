const  express = require('express');
var cors = require('cors')
const app = express();
const cookieParser=require('cookie-parser')
const mongoose =require('mongoose');

const port=5001
const corsoption={
    origin:'http://localhost:3001',
    optionSuccessStatus:200,
    allowedHeaders:['Content-Type', 'Authorization'],
    credentials: true
}
app.use(cors(corsoption))
app.use(cookieParser());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/nykaagamezone',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('successfully connected to database')
})
const userrouter= require('./routes/userroutes.js')
const gamerouter= require('./routes/gameroutes.js')
app.use('/api',userrouter);
app.use('/api',gamerouter)

app.listen(port,()=>{
    console.log('express server started');
});