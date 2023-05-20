
const mongoose = require('../config/conexion');

const Schemamascota = new mongoose.Schema({
    _id:{
        type: Number,
        required:true,
        min:0,
        max:1000
    
    },
    nombre:{
        type:String,
        required:true,
        default:"no registro"

    },
    raza:{
        type:String,
        required:true,
    },
    comida:{
        type:String,
        required:true,
    }

});

const mascota= mongoose.model('mascota', Schemamascota)

module.exports = mascota;
