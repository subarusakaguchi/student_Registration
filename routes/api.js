const express = require('express')
const students = require('../students/students')
const router = express.Router()

router.use(express.urlencoded())

router.get('/all', (req, res) => {
    res.json(JSON.stringify(students.getAll()))
})

router.post('/new', (req, res) => {
    let name = req.body.name
    let surname = req.body.surname
    let birth = req.body.birth
    let address = req.body.address

    students.newStudent(name, surname, birth, address)
    res.send('Estudante adicionado')
})

router.put('/att', (req, res) => {
    let id = req.body.id
    let newName = req.body.newName
    let newSurname = req.body.newSurname
    let newBirth = req.body.newBirth
    let newAddress = req.body.newAddress
    let studentIndex = students.getStudentIndex(id)
    let studentList = students.getAll()

    studentList[studentIndex] = {id,
                                 name:newName,
                                 surname:newSurname,
                                 birth:newBirth,
                                 address:newAddress}
    res.send('Aluno atualizado')
})

router.delete('/del', (req, res) => {
    let id = req.body.id

    students.deleteStudent(id)
    res.send('Estudante apagado')
})

module.exports = router