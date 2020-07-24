; 
'use strict'

const express = require('express')
const autentica = require('../authenticate/autentica')
multiParty = require('connect-multiparty'),
autenticateControl = require('../authenticate/autentica')
passwordControl = require('../authenticate/password')

let api = express.Router(),
personControl = require('../controllers/person.controllers')

//api.get('/prueba_bd', personControl.testConnectionPerson)
api.get('/get_person', autenticateControl.autenticate, personControl.get_person),
//api.post('/insert_person',passwordControl.encode, personControl.insert_one),
api.put('/update/:id', autenticateControl.autenticate, personControl.update_one),
api.get('/person/:id',personControl.new_person),
api.delete('/delete_all_person',personControl.delete_many),
api.delete('/delete_person/:id', autenticateControl.autenticate,personControl.delete_one),
api.post('/insert_person',passwordControl.encode, personControl.new_person),
api.post('/login',personControl.login)




module.exports = api