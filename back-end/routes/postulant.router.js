;
'use strict'
const express = require('express');
let api = express.Router()
    
const postulantController = require('../controllers/postulant.controller');

//prueba de conexion
api.get('/prueba', postulantController.prueba)

//obtiene datos
api.get('/get', postulantController.getAll)

//insertar postulante
api.post('/insertOne', postulantController.insertData)

//actualizar postulante
api.put('/updateOne', postulantController.updateData)

//borrar postulante
api.delete('/deleteOne', postulantController.deleteData)

module.exports = api;