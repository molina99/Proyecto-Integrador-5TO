;
'use strict'

const conectaDb = require('../config/db')
const { ObjectId } = require('mongodb')

let connectionTestRubrics = (req, res) => {
    res.status(200).send('Hola API')
}

module.exports = {
    connectionTestRubrics
}