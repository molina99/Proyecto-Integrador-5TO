; 
'use strict'

const express = require('express')
multiParty = require('connect-multiparty'),
autenticateControl = require('../authenticate/autentica'),
passwordControl = require('../authenticate/password'),
rolesControl = require('../authenticate/role');

let api = express.Router(),
    congressControl = require('../controllers/congress.controllers');

//api.get('/prueba_bd', congressControl.congressConnectionTest)

api.get('/get_congress', autenticateControl.autenticate, congressControl.get_congress)
api.put('/update_congress/:id', autenticateControl.autenticate, congressControl.update_congress)
api.delete('/delete_congreso/:id', autenticateControl.autenticate, congressControl.delete_congress)
api.post('/insert_congreso', congressControl.new_congress)
api.post('/create_congreso', autenticateControl.autenticate ,congressControl.new_congress)


module.exports = api