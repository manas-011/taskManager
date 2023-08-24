import express from 'express' ;
import cors from 'cors' ;
import Connection from './database/db.js';
import Routes from './routes/route.js'
import dotenv from 'dotenv'

import path from 'path';

dotenv.config()
const PORT = 8000 ;
const app = express() ;
app.use(cors()) ;

//  app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });

app.use(express.json()) ;
app.use(express.urlencoded({extended: true})) ;

// static files 
app.use(express.static(path.join(__dirname , './client/build'))) ;

app.get('*' , function(req , res){
    res.sendFile(path.join(__dirname , "./client/build/index.html")) ;
}) ;
Connection() ;


//localhost:8000/routes
app.use('/' , Routes) ;  


app.listen(process.env.PORT || PORT , (req , res) => {
    console.log(`Your server is running succesfully on port ${PORT}..`) ;
})