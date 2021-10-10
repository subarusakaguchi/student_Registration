module.exports = {
    studentList: [],

    getAll: function() {
        return this.studentList
    },

    getOne: function(index) {
        return this.studentList[index]
    },

    getStudentIndex: function(id) {
        return this.studentList.findIndex((student) => {
            return student.id == id
        })
    },

    newStudent: function(name, surname, birth, address) {
        let id = ''
        while (id == '' || !this.verifyId(id)) {
            id = this.generateId()
        }

        this.studentList.push({id, name, surname, birth, address})
    },

    deleteStudent: function(id) {
        this.studentList = this.studentList.filter((student) => {
            return student.id != id
        })
    },

    generateId: function() {
        return Math.random().toString(36).substr(2, 9)
    },

    verifyId: function(id) {
        return this.studentList.every((student) => {
            return student.id != id
        })
    }
}