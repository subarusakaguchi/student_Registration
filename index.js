const express = require('express')
const path = require('path')
const students = require('./students/students')
const app = express()
const PORT = 8000

app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/all', (req, res) => {
    res.json(JSON.stringify(students.getAll()))
})

app.post('/new', (req, res) => {
    let name = req.body.name
    let surname = req.body.surname
    let birth = req.body.birth
    let address = req.body.address

    students.newStudent(name, surname, birth, address)
    res.send('Estudante adicionado')
})

app.delete('/del', (req, res) => {
    let id = req.body.id

    students.deleteStudent(id)
    res.send('Estudante apagado')
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT)
})