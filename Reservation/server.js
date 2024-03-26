const express =  require('express');
const app = express(); 
const reservation = require('../modeles/Reservation');
const PORT = 3003;
app.use(express.json());
app.post('/reservation' ,async (req , res)=>{
    const resrve = new  reservation({
            user_Id:req.body.user_Id,
            Chambre_Id : req.body.Chambre_Id
    });
    try{
        if(!Chambre_Id && user_Id){
            return res.status(400)
        }
        const  resultat2= await resrve.save() ;
        res.json(resultat2);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})
const mongoose = require('mongoose');
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect('mongodb://localhost:27017/Reservation');
const db=mongoose.connection;
db.on('error',()=>{
    console.log('Error connecting to database');
})
db.once('open', () => {
    console.log('connection de base MongoDB!!');
})
