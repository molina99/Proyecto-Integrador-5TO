; 
'use strict'

const express = require('express')

let api = express.Router(),
    cronogControl = require('../controles/schedule.controlador')

api.get('/prueba_bd', cronogControl.testConnectionSchedule)


module.exports = api