;
'use strict'
const fs = require('fs'),
    path = require('path'),
    bcrypt = require('bcrypt'),
    jwt = require("jsonwebtoken"),
    modelCongress = require('../models/congress.model');

let get_congress = (req, res) => {
    modelCongress.find()
        .then(data => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}

//insertar uno
let new_congress = (req, res) => {
    let congress = req.body.data
    modelCongress.create(congress)
        .then(data => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })

}

let delete_congress = (req, res) => {
    id = req.params.id
    modelCongress.deleteOne({ '_id': id })
        .then(data => {
            res.status(200).json({
                msg: `${data.deletedCount}`,
                data: data,
                transaccion: true
            })
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}

let update_congress = (req, res) => {
    let _id = req.params.id,
        data = req.body.data;
        modelCongress.updateOne({ '_id': _id }, { $set: data })
        .then((data) => {
            res.status(200).json({
                ok: true,
                data: data,
                msg: "ready",
                token: req.token,
            });
        })
        .catch((err) => {
            res.status(500).json({
                ok: false,
                data: null,
                msg: err,
            });
        });
};
module.exports = {
    get_congress,
    new_congress,
    delete_congress,
    update_congress
}