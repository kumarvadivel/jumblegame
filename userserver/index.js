const  express = require('express');
var cors = require('cors')
const app = express();
const cookieParser=require('cookie-parser')
const mongoose =require('mongoose');
const session=require('express-session');
const mongodbsession = require('connect-mongodb-session')(session)

const port=8080
const corsoption={
    origin:['http://localhost:3000',"http://192.168.43.239:3000"],
    optionSuccessStatus:200,
    allowedHeaders:['Content-Type', 'Authorization'],
    credentials: true
}
const store= new mongodbsession({
   uri:"mongodb+srv://kumar:1721175@cluster0.lxafx.mongodb.net/nykaa?retryWrites=true&w=majority",
   
    collection:"sessions",
    expires:1000*60*60*24*30
})
app.use(cors(corsoption))
app.use(cookieParser())
app.use(express.json())


app.sessionMiddleware = session({
    secret:'acid',
    resave:false,
    saveUninitialized:false,
    store:store
})

 app.use(app.sessionMiddleware)

mongoose.connect('mongodb+srv://kumar:1721175@cluster0.lxafx.mongodb.net/nykaa?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('successfully connected to database')
})
const gamerouter= require('./routes/gameroutes.js')
app.use('/api',gamerouter)

app.listen(port,()=>{
    console.log('express server started');
});