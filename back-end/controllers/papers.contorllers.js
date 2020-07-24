;
'use strict'

const conectaDb = require('../config/db')
const { ObjectId } = require('mongodb')

let testConnectionPapers = (req, res) => {
    res.status(200).send('Hola API')
}

module.exports = {
    testConnectionPapers
}