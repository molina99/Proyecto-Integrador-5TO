;
'use strict'

const express = require('express')
let api = express.Router()

const personController = require('../controllers/person.controller')

api.get('/getPersonById/:id', personController.getPersonById)
api.get('/getPersons', personController.getPersons)
api.post('/postPerson', personController.postPerson)
api.put('/putPerson/:id', personController.putPerson)
api.delete('/deletePerson/:id', personController.deletePerson)
api.post('/login', personController.login)

module.exports = api
