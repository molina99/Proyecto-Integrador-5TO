;
'use strict'

// const conectaDb = require('../config/db')
// const { ObjectId } = require('mongodb')
const fs = require('fs'),
    path = require('path'),
    bcrypt = require('bcrypt'),
    jwt = require("jsonwebtoken"),
    person_model = require('../models/person.model');

// let testConnectionPerson = (req, res) => {
//     res.status(200).send('Hello API')
// }
let get_person = (req, res) => {
    person_model.find()
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
let insert_one = (req, res) => {
    name = req.body.name,
    type_dni = req.body.type_dni,
    dni = req.body.dni,
    names = req.body.names,
    last_names = req.body.last_names,
    phone = req.body.phone,
    email = req.body.email,
    password = req.body.password,
    status_speaker_revisor = req.body.status_speaker_revisor
    person_model.create({ name, type_dni, dni, names, last_names, phone, email, password, status_speaker_revisor})
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

let insert_many = (req, res) => {
    data = req.body.data
    person_model.insert_many(data)
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
//Actualizar uno
let update_one = (req, res) => {
    let _id = req.params.id,
        data = req.body.data;
        console.log(data)
        person_model.updateOne({ '_id': _id }, { $set: data })
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
//buscar por ID
//pruebale
let get_usuario_one = (req, res) => {
    id = req.params.id
    person_model.find({ '_id': id })
        .then(data => {
            res.status(200).json({
                msg: 'ok',
                data: data,
                transaccion: true
            })
            console.log(data)
        }).catch(e => {
            res.status(500).json({
                msg: e,
                data: null,
                transaccion: false
            })
        })
}
//Delete varios
let delete_many = (req, res) => {
    person_model.delete_many({})
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
let delete_one = (req, res) => {
    id = req.params.id
    person_model.deleteOne({ '_id': id })
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
let new_person = (req, res) => {
    let person = req.body.data
    person_model.create(person)
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
let login = (req, res) => {
    let { data } = req.body,
        email = data.email,
        password = data.password;
        person_model.find({ email })
        .then((data) => {
            if (data[0].email === email) {
                let token,
                    tokenBody = {
                        names: data[0].names,
                        email: data[0].email,
                        sessionID: data[0].sessionID,
                    };
                bcrypt.compareSync(password, data[0].password) ?
                    ((token = jwt.sign({ data: tokenBody }, process.env.KEY_JWT, {
                            algorithm: "HS256",
                            expiresIn: 60000,
                        })),
                        res.status(200).json({
                            transaccion: true,
                            data: data,
                            msg: "User OK",
                            token,
                        })) :
                    res.status(404).json({
                        transaccion: false,
                        data: null,
                        msg: "Incorrect password",
                        token: null,
                    });
            }
        })
        .catch((err) => {
            res.status(404).json({
                transaccion: false,
                data: null,
                msg: "Email not found",
            });
        });
};
module.exports = {
    get_person,
    insert_one,
    insert_many,
    update_one,
    get_usuario_one,
    delete_many,
    delete_one,
    new_person,
    login
}