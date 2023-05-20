const express = require('express');
const rutmascot = require ('../controller/mascotas') //se traen los documentos de la carpeta controlle//

const router = express.Router();


router.get('/mascotas',rutmascot.mascota);
router.post('/agregar',rutmascot.agregarmascota);
router.get('/mostrar',rutmascot.mostrarmacota);
router.get('/eliminar/:id', rutmascot.eliminar);
router.post('/actualizar',rutmascot.actualizarmascota);

module.exports = router;

