const express =  require('express');
const app = express(); 
const PORT = 3000;
app.use(express.json());
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
        }catch(err){
            res.status(500).json({message:err.message})
        }
})
const mongoose = require('mongoose');
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect('mongodb://localhost:27017');
const db=mongoose.connection;
db.on('error',()=>{
    console.log('Error connecting to database');
})
db.once('open', () => {
    console.log('connection de base MongoDB!!');
})
