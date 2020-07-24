; 
'use strict'

const express = require('express')

let api = express.Router(),
    categoryControl = require('../controles/category.controlador')

api.get('/prueba_bd', categoryControl.testConnectionCategory)


module.exports = api