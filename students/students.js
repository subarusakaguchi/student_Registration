const students = {
    studentList: [{
        id: 'aldasjad',
        name: 'Pedro Paulo',
        surname: 'Pedreira Polinário',
        birth: '10/04/2002',
        address: 'Rua das flores nº 915'
    }],

    all: function() {
        return this.studentList
    },

    newStudent: function(name, surname, birth, address) {
        this.studentList.push({id: this.generateId(), name, surname, birth, address})
    },

    generateId: function() {
        let id = ''
        while (this.verifyId(id) || id == '') {
            id = Math.random().toString(36).substr(2, 9)
        }
        return id
    },

    verifyId: function(id) {
        this.studentList.forEach((student) => {
            if (id == student.id) {
                return true
            }
        })

        return false
    }
}