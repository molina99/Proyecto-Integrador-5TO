;
'use strict'

const env = require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (!err) {
        console.log(`The server found on port https://localhost:${port}`)
    } else {
        console.log(`Server doesn't work`)
    }
})
