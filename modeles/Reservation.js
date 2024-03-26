const mongoose = require('mongoose');
const Reservation =  new mongoose.Schema({
    user_Id: { type: String, require},
    Chambre_Id :{type:String ,require}
})
const SHReservation = mongoose.model('Reservation',Reservation);
module.exports = SHReservation; 
