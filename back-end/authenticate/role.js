const jwt = require("jsonwebtoken");

let admin = (req, res, next) => {
    let token = req.headers.authorization || null;

    jwt.verify(token, process.env.KEY_JWT, (err, decode) => {
        if (err) {
            return res.status(400).json({
                data: err,
                msg: "token Invalido",
            });
        } else {
            switch (decode.data.rol) {
                case "administrador":
                    console.log("Eres el administrator ):");
                    next();
                    break;
                default:
                    res.status(401).json({
                        ok: false,
                        data: null,
                        msg: "No eres el administrador",
                    });
            }
        }
    });
};

let client = (req, res, next) => {
    let token = req.headers.authorization || null;

    jwt.verify(token, req.sessionID, (err, decode) => {
        if (err) {
            return res.status(400).json({
                data: err,
                msg: "token Invalido",
            });
        } else {
            switch (decode.data.rol) {
                case "cliente":
                    console.log("Cliente");
                    next();
                    break;
                default:
                    res.status(401).json({
                        ok: false,
                        data: null,
                        msg: "Acceso parcial",
                    });
            }
        }
    });
};

module.exports = {
    admin,
    client,
};