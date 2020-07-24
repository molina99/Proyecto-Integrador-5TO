;
'use strict'

const bcrypt = require('bcrypt')


let encode = (req, res, next) => {
    let data = req.body.data || null
    if (!data || !data.password) {
        return res.status(401).send('usuario o contraseña invalidos')
    } else {
        let encodepassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
        if (encodepassword) {
            req.body.data.password = encodepassword
            req.body.data.createAt = new Date()
            req.body.data.sessionID = req.sessionID
            console.log(req.body.data.sessionID);
            next();
        } else {
            return res.status(401).send('contraseña no encriptada')
        }
    }
}

module.exports = { encode }