const express = require('express');
const path = require('path');
const User = require('./db/models/users.js');
const app = express();

app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'..','public')));
app.use('/dist',express.static(path.join(__dirname,'..','dist')));
app.use('/api/users',require('./routes/users.js'));
app.use('/api/groups',require('./routes/groups.js'));
app.use('/api/todos',require('./routes/todos.js'));
app.get('/',async(req,res,next)=>{
    try {
        res.sendFile(path.join(__dirname,'..','public','index.html'));
    } catch (err) {
        next(err);
    };
});
app.use((err,req,res,next)=>{
    res.status(err.status||500).send({message: err.message});
});
module.exports=app;
