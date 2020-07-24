;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const links_model = new Schema({
    link_video: { type: String },
    });

module.exports = mongoose.model('congress', links_model);