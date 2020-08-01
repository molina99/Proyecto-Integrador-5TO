'use strict'

const Postulant = require('../models/postulantModel'),
    fs = require('fs')

/** 
 *prueba de conexion 
*/
let prueba = (req, res) => {
    res.status(200).send('Zero')
}

/**
 *obtener Postulantes 
 */
let getAll = async (req, res) => {
    let postulant = await Postulant.find()
        .then((postulant) => {
            res.status(200).json({
                transaction: true,
                postulant,
                msg: `Postulantes obtenidos ${postulant.length}`
            })
        })
        .catch(err => {
            res.status(500).json({
                transaction: false,
                data: null,
                msg: err
            })
        })
}

/** 
 * insertar Postulant
*/
let insertPostulant = async (req, res) => {
    let postulant = req.body.postulant
    console.log(postulant)
    let newPostulant = new Postulant(postulant)
    await newPostulant.save()
        .then(() => {
            res.status(200).json({
                transaction: true,
                newPostulant,
                msg: 'postulante insertado..'
            })
        })
        .catch(err => {
            res.status(500).json({
                transaction: false,
                newPostulant: null,
                msg: `El error es: ${err}`
            })
        })
}

/** 
 * acualizar Postulant 
*/
let updatePostulant = async (req, res) => {
    let id = req.params.id
    let postulant = req.body.postulant
    console.log(postulant)
    let updateData = await Postulant.updateOne({ '_id': id }, { $set: postulant })
        .then((updateData) => {
            res.status(200).json({
                transaction: true,
                updateData,
                msg: 'postulante actualizado..'
            })
        })
        .catch(err => {
            res.status(500).json({
                transaction: false,
                data: null,
                msg: `El error es: ${err}`
            })
        })
}

/** 
 * borar Postulant
*/
let deletePostulant = async (req, res) => {
    let id = req.params.id
    let deleteData = await  Postulant.deleteOne({ '_id': id })
        .then((deleteData) => {
            res.status(200).json({
                transaction: true,
                deleteData,
                msg: 'postulante borrado..'
            })
        })
        .catch(err => {
            res.status(500).json({
                transaction: false,
                data: null,
                msg: `El error es: ${err}`
            })
        })
}


module.exports = {
    prueba,
    getAll,
    insertPostulant,
    updatePostulant,
    deletePostulant
}

