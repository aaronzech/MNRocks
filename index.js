const express = require('express');
const app = express();
const path = require('path');

// Mongoose Items
const mongoose = require('mongoose');
const { MongoServerClosedError } = require('mongodb');
mongoose.connect('mongodb://localhost:27017/mnRocks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/rock',(req,res) => {
    res.send('Rock from express');
})

app.listen(3000,()=>{
    console.log("APP IS listening on port 3000")
})