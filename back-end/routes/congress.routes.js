;
'use strict'

const express = require('express')
let api = express.Router()

const congressController = require('../controllers/congress.controller')

api.get('/getCongress', congressController.getCongress)
api.post('/postCongress', congressController.postCongress)
api.put('/putCongress/:id', congressController.putCongress)

module.exports = api
