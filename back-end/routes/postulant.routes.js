; 
'use strict'

const express = require('express')

let api = express.Router(),
    controlApplicant = require('../controles/postulant.controlador')

api.get('/prueba_bd', controlApplicant.applicantConnectionTest)


module.exports = api