const express =  require('express');
const app = express(); 
const axios = require('axios');
app.post('/addINC/:user_id/:result_id', async  (req, res) => {
    const user =axios.get('mongodb://localhost:27017/auth_service'+req.params.user_Id);
    try{
        if(!user){
            await inscModel.create({
                user_id : req.parmas.user}).then(old =>res.json(old))
            }}catch(err){
                res.status(500).json({message:err.message});
            }
        });
