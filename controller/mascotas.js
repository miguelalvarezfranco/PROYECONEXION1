const mascota = require('../models/mascota');
const router = require('../routes/enrutamiento');

exports.mascota = async(req, res)=>{
    let listamascota = await  mascota.find();
    console.log(listamascota);

    res.render( "inmascotas",{

        "mascota":listamascota,
    })

};
exports.mostrarmacota =(req, res)=>{ //render asocia un documento que contiene lo que va mostarr al usuario  //
    res.render('mostrar');

 }

exports.agregarmascota= (req, res) => {
    const mascotas =  new mascota({
        _id : req.body.id,
        nombre: req.body.nombre,
        raza: req.body.raza,
        comida: req.body.comida, 
    });

    mascotas.save()
    res.redirect('/api/v1/mascotas');
    console.log('mascotas');
  
};


exports.eliminar = async (req, res)=>{
    const id = req.params.id
    await mascota.findByIdAndDelete({'_id':id});

    res.redirect('/api/v1/mascotas')
   
};

exports.actualizarmascota = async(req,res) => {
   const filtro = {_id: req.body.idactualizar};
   const update = {nombre: req.body.nombre, raza: req.body.raza, comida: req.body.raza};


   await mascota.findOneAndUpdate(filtro, update);

   res.redirect('/api/v1/mascotas');
   
};




