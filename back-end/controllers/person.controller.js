;
'use strict'
const Person = require('../models/Person')
const jwt = require('jsonwebtoken')

let getPersonById = async (req, res) => {
    let id = req.params.id
    let person = await Person.findById({_id: id})
    if (person) {
        res.status(200).json({
            ok: true,
            person
        })
    } else if (person.length === 0) {
        res.send('El usaurio no está registrado en el sistema')
    } else {
        res.status(500).json({
            ok: false,
            data: null
        })
    }
}

let getPersons = async (req, res) => {
    let persons = await Person.find()
    if (persons) {
        res.status(200).json({
            ok: true,
            persons
        })
    } else if (persons.length === 0) {
        res.send('No hay ningún usuario registrado')
    } else {
        res.status(500).json({
            ok: false,
            data: null
        })
    }
}

let postPerson = async (req, res) => {
    let person = req.body.person
    let newPerson = new Person(person)
    await newPerson.save()
        .then(() => {
            res.status(200).json({
                ok: true,
                newPerson,
                sms: 'Usuario creado'
            })
        }).catch(e => {
            res.status(500).json({
                ok: false,
                data: null,
                sms: e
            })
        })
}

let putPerson = async (req, res) => {
    let id = req.params.id
    let person = req.body.person;
    let putPerson = await Person.updateOne({_id: id}, {$set: person})
    if (putPerson) {
        res.status(200).json({
            ok: true,
            person,
            sms: 'Usuario actualizado'
        })
    } else {
        res.status(500).json({
            ok: false,
            data: null
        })
    }
}

let deletePerson = async (req, res) => {
    let id = req.params.id
    let deletePerson = await Person.deleteOne({_id: id})
    if (deletePerson) {
        res.status(200).json({
            ok: true,
            sms: 'Usuario eliminado'
        })
    } else {
        res.status(500).json({
            ok: false,
            data: null
        })
    }
}

let login = async (req, res) => {
    let person = req.body.person
    let personLog = await Person.find({email: person.email})
    if (personLog.length > 0) {
        if (person.password === personLog[0].password) {
            let token = jwt.sign(person, process.env.KEY_JWT, {
                algorithm: 'HS256',
                expiresIn: parseInt(process.env.TIME)
            })
            res.status(200).json({
                ok: true,
                person, token
            })
        } else {
            res.status(200).send('Contraseña o correo incorrectos')
        }
    } else {
        res.status(200).send('La cuenta no existe')
    }
}

module.exports = {
    getPersonById,
    getPersons,
    postPerson,
    putPerson,
    deletePerson,
    login
}
