const express =  require('express');
const app = express(); 
const chambre = require('../modeles/Chambre');
const PORT = 3001;
app.use(express.json());
app.post('/chambre', async (req, res) => {
    const cham = new chambre({
        type:req.body.type,
        capacite:req.body.capacite,
        prix:req.body.prix,
        disponiblite:req.body.disponiblite,
        hotel:req.body.hotel
    });
    try{
        const  resultat1= await cham.save() ;
        res.json(resultat1);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
app.get("/chambre",async (req ,res)=>{
        try{
            const cham = await chambre.findById();
            res.json(cham);
        }catch(err){
            res.status(500).json({message : err.message});
        }
})
const mongoose = require('mongoose');
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect('mongodb://localhost:27017/chambre');
const db=mongoose.connection;
db.on('error',()=>{
    console.log('Error connecting to database');
})
db.once('open', () => {
    console.log('connection de base MongoDB!!');
})
