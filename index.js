
const express = require('express');
const app = express();            //framework que crea la aplicacion en el servidor//
const morgan = require('morgan');  //para gestionar las request procesadas//
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'));
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


const Mrouter =require('./routes/enrutamiento');
app.use('/api/v1',Mrouter);

app.listen(PORT, ()=>{
    console.log(`conectado en linea con el servidor ${PORT}`);
});








//enrutamiento//










//Metodo para actualizar//


/*app.put('mostrar/:id', async(req, res)=> {
    try {
        let id = req.params.id;
        let {nombre, raza, comida} = req.body;
        let res = await mascotas.update(
            {nombre, raza, comida},
            {
                where:{
                    id,
                },
            }
        );
    
    } catch (error) {
        res.status(400).send('no se pudo actualizar');
        //eliminar mascota.id
    }
        
    });

    //db.collection('mascotas')*/


/*app.put('/mostrar/:id', async(req,res)=>{
    const mostrar = await mostrar.findAndUpdate(req.params.id,
        { mascotas: req.params.id },
        { new: true }
);
    
    res.json({ mostrar });
    
    });*/ 










