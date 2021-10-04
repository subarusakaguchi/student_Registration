const express = require('express')
const path = require('path')
const student = require('./students/students')
const app = express()
const PORT = 8000



app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT)
})