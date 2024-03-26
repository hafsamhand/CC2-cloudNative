const mongoose = require('mongoose');
const Chambre =  new mongoose.Schema({
    type :{type:String},
    capacite :{type: Number},
    prix:{type:Number,required:true},
    disponiblite :{type:Boolean},
    hotel:{type:String} 
})
const SHChambre = mongoose.model('Chambre',Chambre);
module.exports = SHChambre; 
