const mongoose = require('mongoose');
const utilisateur =  new mongoose.Schema({
    nom :{type:String},
    email :{type: String },
    prenom:{type: String},
    login :{type:String},
    mdp:{type:String} 
})
const SHutilisateur = mongoose.model('utilisateur',utilisateur);
module.exports = SHutilisateur; 
