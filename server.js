const express = require("express");

const app = express();
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3030,err=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("servidor rodando");
        
    }
})