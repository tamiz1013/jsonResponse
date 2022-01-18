const express = require('express');
const app = express();

app.listen(4000,()=>{
    console.log('server started');
});
app.get('/json',(req,res)=>{
    res.send({
        name:'tamiz',
        age:21,
    });
});