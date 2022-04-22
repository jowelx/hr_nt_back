//------------------------------------//
//---------------Imports--------------//
//------------------------------------//
require('dotenv').config();
import express,{Request,Response} from 'express';
import methodOverride from 'method-override';
import session from 'express-session'
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
//---------------Routes---------------//
//------------------------------------//
app.get("/",(req:Request,res:Response)=>{
  res.send("klok")
})



//------------------------------------//
//---------------Static files---------//
//------------------------------------//

//------------------------------------//
//---------------Server is listen-----//
//------------------------------------//
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });