const { request } = require('express');
const express = require('express');
const passport = require('passport');
const router = express.Router({mergeParams: true});
const User = require('../Models/user')


router.get('/register', (req,res)=>{
    res.render('../views/register')
})

router.post('/register', async (req, res) =>{
    res.send(req.body)
    console.log(req.body);
})

module.exports= router;