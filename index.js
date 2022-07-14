const express=require('express')

const app=express()
// const data = require('./routes/news')



app.use('/',require('./routes/news'))


app.listen(2345,async ()=>{
   
    try{
 
    
        console.log("2345")
    }catch(e){
        console.log(e.message)
    }
})