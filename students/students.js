module.exports = {
    studentList: [{
        id: 'gwsgfsd',
        name: 'Pedro Paulo',
        surname: 'Pedreira Polinário',
        birth: '10/04/2002',
        address: 'Rua das flores nº 915'
    }],

    getAll: function() {
        return this.studentList
    },

    newStudent: function(name, surname, birth, address) {
        let id = this.generateId()
        console.log(id)
        let verifiedId = ''
        verifiedId = this.verifyId(id)
        console.log(verifiedId)

        this.studentList.push({id: verifiedId, name, surname, birth, address})
    },

    deleteStudent: function(id) {
        this.studentList = this.studentList.filter((student) => {
            return student.id != id
        })
    },

    generateId: function() {
        console.log('teste1')
        return id = Math.random().toString(36).substr(2, 9)
    },

    verifyId: function(id) {
        this.studentList.forEach((student) => {
            if (student.id == id) {
                console.log('teste2')
                return this.generateId()
            }
        })
        console.log('teste3')
        return id
    }
}