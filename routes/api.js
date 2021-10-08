const express = require('express')
const students = require('../students/students')
const router = express.Router()

router.get('/all', (req, res) => {
    res.json(JSON.stringify(students.getAll()))
})

router.post('/student', express.json(), (req, res) => {
    let index = students.getStudentIndex(req.body.id)
    let student = students.getOne(index)
    res.json(JSON.stringify(student))
})

router.post('/new', express.json(), (req, res) => {
    const { name, surname, birth, address } = req.body

    students.newStudent(name, surname, birth, address)

    res.send('Estudante adicionado')
})

router.put('/att', express.json(), (req, res) => {
    const { id, newName, newSurname, newBirth, newAddress } = req.body
    let studentIndex = students.getStudentIndex(id)
    let studentList = students.getAll()

    studentList[studentIndex] = {id,
                                 name:newName,
                                 surname:newSurname,
                                 birth:newBirth,
                                 address:newAddress}
    res.send('Aluno atualizado')
})

router.delete('/del', express.json(), (req, res) => {
    let id = req.body.id

    students.deleteStudent(id)
    res.send('Estudante apagado')
})

module.exports = router