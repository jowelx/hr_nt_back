import express from'express';
import morgan from'morgan';
import moongose from'mongoose';
import cors from 'cors'
import {ERROR_CONNECTION,SUCCESFULL_CONNECTION ,SERVER}from './src/constants/Text.js'
import Api from './api/Api.js';
import axios from 'axios';
const app =express();
//setting
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:false,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors());
app.set('port', process.env.PORT || 4000)
//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '500mb' }));
app.use('/api/bill',Api)
app.get('/', async (req,res)=>{
    try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
})

//Initialization of database connection and server
moongose.connect(
    'mongodb://127.0.0.1:27017/marble_db',
    {useNewUrlParser:true},
    (err,res)=>{
        err 
        ? 
        [console.log(ERROR_CONNECTION),
        console.log(err)]
        
        :
        console.log(SUCCESFULL_CONNECTION )
        //starting the server
        app.listen(app.get('port'), () => {
            console.log(SERVER +" "+app.get('port'));
          })
    }
)
