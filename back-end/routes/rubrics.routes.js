; 
'use strict'

const express = require('express')

let api = express.Router(),
    rubricControl = require('../controles/rubrics.control')

api.get('/prueba_bd', rubricControl.connectionTestRubrics)


module.exports = api