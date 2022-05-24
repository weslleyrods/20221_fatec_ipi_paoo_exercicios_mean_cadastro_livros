
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

//permite que o body da requisição http receba um objeto json
app.use(express.json())

//middleware
// app.use((req, res, next) => {
//     res.send("Requisição funcionando...")
//     next()
// })

app.use((req, res) => {
    res.send("Hello from the back end");
});
//GET
//POST

module.exports = app

