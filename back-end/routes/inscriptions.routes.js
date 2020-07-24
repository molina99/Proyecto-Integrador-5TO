; 
'use strict'

const express = require('express')

let api = express.Router(),
    inscrbControl = require('../controles/inscriptions.controlador')

api.get('/prueba_bd', inscrbControl.registrationTestRegistration)


module.exports = api