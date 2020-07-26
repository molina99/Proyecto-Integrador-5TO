;
'use strict'

const mongoose = require('mongoose'),
    { Schema } = mongoose,

    PostulantModel = new Schema(
        {
            projectTittle: { type: String },
            projectSummary: { type: String },
            summaryPdf: { type: String },
            files: { type: String },
            presentationTimes: { type: String }
        }
    );

module.exports = mongoose.model('postulant', PostulantModel )
