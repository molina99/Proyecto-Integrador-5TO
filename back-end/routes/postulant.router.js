;
'use strict'
const express = require('express');
let api = express.Router()
    
const postulantController = require('../controllers/postulant.controller');

/** 
 * prueba de conexion
*/
api.get('/prueba', postulantController.prueba)

/** 
 * Ruta Obtiene Postualntes
*/
api.get('/get', postulantController.getAll)

/** 
 * Ruta Insertar Postulante
*/
api.post('/insertOne', postulantController.insertPostulant)

/** 
 * Ruta Actualizar Postulante
*/
api.put('/updateOne/:id', postulantController.updatePostulant)

/**
 * Ruta Borrar Postulante
*/
api.delete('/deleteOne/:id', postulantController.deletePostulant)

module.exports = api;