'use strict'

const Postulant = require('../models/postulantModel'),
    fs = require('fs')

//prueba de conexion
let prueba = (req, res) => {
    res.status(200).send('Zero')
}


//obtener todos
let getAll = async (req, res) => {
    Postulant.find()
        .then(data => {
            res.status(200).json({
                transaction: true,
                data,
                msg: `Postulantes obtenidos ${data.length}`
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

// insertar Postulant
let insertData = async (req, res) => {
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

//acualizar Postulant
let updateData = (req, res) => {
    let id = req.params.id
    let postulant = req.body.postulant

    Postulant.updateOne({ '_id': id }, { $set: postulant })
        .then(data => {
            res.status(200).json({
                transaction: true,
                data,
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

//borar Postulant
let deleteData = async (req, res) => {
    let id = req.params.id
    Postulant.deleteOne({ '_id': id })
        .then(data => {
            res.status(200).json({
                transaction: true,
                data,
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
    insertData,
    updateData,
    deleteData
}