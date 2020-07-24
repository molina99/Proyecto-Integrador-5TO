;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const category_model = new Schema({
    name: { type: String },
    });

module.exports = mongoose.model('congress', category_model);