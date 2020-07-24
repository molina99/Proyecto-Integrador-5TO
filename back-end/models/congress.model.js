;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const congress_model = new Schema({
    name: { type: String },
    adress_web : { type: String},
    start_date: {type: Date },
    end_date: { type: Date },
    logo: { type: String },
    publicity_image: { type: String },
    limit_speaker_time: { type: Number},
    regulations: { type: String},
    politics: { type: String},
    capacity_speakers: { type: Number},
    capacity_participants: { type: Number},
    status_congress: { type: Boolean}
    });

module.exports = mongoose.model('Congress', congress_model);