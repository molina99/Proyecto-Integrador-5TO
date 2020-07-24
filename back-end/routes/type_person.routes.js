; 
'use strict'

const express = require('express')

let api = express.Router(),
    personTypeControl = require('../controles/type_person.controlador')

api.get('/prueba_bd', personTypeControl.connectionTestTypePerson)


module.exports = api