;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const person_model = new Schema({
    name: { type: String },
    type_dni : { type: String },
    dni: {type: String },
    names: { type: String },
    last_names: { type: String },
    phone: { type: Number },
    email: { type: String },
    password: { type: String },
    status_speaker_revisor: { type: Boolean }
});

module.exports = mongoose.model('Persons', person_model);