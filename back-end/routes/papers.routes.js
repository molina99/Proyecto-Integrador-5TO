; 
'use strict'

const express = require('express')

let api = express.Router(),
    paperControl = require('../controles/papers.contorlador')

api.get('/prueba_bd', paperControl.testConnectionPapers)


module.exports = api