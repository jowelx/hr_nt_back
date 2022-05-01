//------------------------------------//
//---------------Imports--------------//
//------------------------------------//

import express from 'express';
import methodOverride from 'method-override';
import session from 'express-session'
import mongoose from 'mongoose'
//------------------------------------//
//------------Initialization----------//
//------------------------------------//
const app = express();

//------------------------------------//
//---------------settings-------------//
//------------------------------------//
app.set('port', process.env.PORT || 4000);



//------------------------------------//
//---------------Middlewares----------//
//------------------------------------//
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session({
  secret:"secret",
  resave:true,
  saveUninitialized:true
}))
//------------------------------------//
//---------------Global variables-----//
//------------------------------------//


//------------------------------------//
//---------------Connectio DB---------//
//------------------------------------//
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(
  'mongodb://localhost/marble',
  options,
  (err,res)=>{
err&&console.log(err)
//------------------------------------//
//---------------Server is listen-----//
//------------------------------------//
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
  }
  )

//------------------------------------//
//---------------Routes---------------//
//------------------------------------//
app.get("/",(req,res)=>{
  res.send("klok")
})
//------------------------------------//
//---------------Static files---------//
//------------------------------------//

