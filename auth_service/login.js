const express =  require('express');
const app = express(); 
const Register = require('Register');
const jwt = require('jsonwebtoken');
const PORT = 3002;
app.use('/register', Register); // use the register route on /register
const utilisateur = require('../modeles/utilisateur');
app.use(express.json());
app.get('/utilisateur' , async (req ,res)=>{
    try{
        const  users = await utilisateur.find();
        res.json(users);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
app.post( '/utilisateur', async (req, res) =>   {
    const user = new utilisateur({
        nom:req.body.nom,
        email : req.body.email,
        login : req.body.login,
        mdp : req.body.mdp,
    });
    try{
        const  resultat= await user.save() ;
        res.json(resultat);
        if(token){
            const token =  jwt.sign({id_user : resultat._id} , "secret" , {expiresIn:"1h"});   
            res.json(token);
        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

const mongoose = require('mongoose');
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect('mongodb://localhost:27017/auth_service');
const db=mongoose.connection;
db.on('error',()=>{
    console.log('Error connecting to database');
})
db.once('open', () => {
    console.log('connection de base MongoDB!!');
})
