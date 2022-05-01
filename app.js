import express from'express';
import morgan from'morgan';
import moongose from'mongoose';
import cors from 'cors'
import {ERROR_CONNECTION,SUCCESFULL_CONNECTION ,SERVER}from './src/constants/Text.js'
import Api from './api/Api.js';

const app =express();
//setting
app.use(cors(/*options*/));
app.set('port', process.env.PORT || 4000)
//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '500mb' }));
app.use('/api/user',Api)
//Initialization of database connection and server
moongose.connect(
    'mongodb://localhost:27017/marble_db',
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
            console.log(SERVER + app.get('port'));
          })
    }
)
