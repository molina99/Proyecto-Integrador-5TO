;
'use strict'

const conectaDb = require('../config/db')
const { ObjectId } = require('mongodb')

let registrationTestRegistration = (req, res) => {
    res.status(200).send('Hola API')
}

module.exports = {
    registrationTestRegistration
}