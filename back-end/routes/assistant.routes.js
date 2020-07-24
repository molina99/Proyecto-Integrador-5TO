; 
'use strict'

const express = require('express')

let api = express.Router(),
    controlAssistant = require('../controles/assistant.controlador')

api.get('/prueba_bd', controlAssistant.assistantConnectionTest)


module.exports = api