;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const role_model = new Schema({
    name: { type: String },
    });

module.exports = mongoose.model('congress', role_model);