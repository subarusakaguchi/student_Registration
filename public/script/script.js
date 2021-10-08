onload = updateStudents()

document.getElementById('formStudent').addEventListener('click', (e) => {
    e.preventDefault()
})

function updateStudents() {
    let promise = fetch('http://localhost:8000/api/all').then( res => {
        return res.json()
    })
    promise.then(students => {
        let studentList = JSON.parse(students)
        let studentElements = ''
        studentList.forEach(student => {
            
            let studentElement = `<div id="container_${student.id}">
            <div id="student_${student.id}" class="card accordion-item mb-3">
            <div class="card-header accordion-header" type="button" data-bs-toggle="collapse" data-bs-target="#cardBody${student.id}">
                <h4 class="card-tittle">${student.name} ${student.surname}</h4>
            </div>
            <div id="cardBody${student.id}" class="card-body accordion-body accordion-collapse collapse" data-bs-parent="#studentList">
                <p>Data de nascimento: ${student.birth}</p>
                <p>Endereço: ${student.address}</p>
            </div>
            <div class="card-footer">
                <input onclick="attStudent(this)" class="btn btn-info" type="button" value="Atualizar dados">
                <input onclick="tempId(this)" class="btn btn-danger" type="button" value="Excluir aluno" data-bs-toggle="modal" data-bs-target="#modalDelete">
            </div>
        </div>
        </div>`

        studentElements += studentElement
        })

        document.getElementById('studentList').innerHTML = studentElements
    })
}


function newStudent(obj) {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let birth = document.getElementById('birth').value
    let address = document.getElementById('address').value

    const options = {
                    method: 'POST',
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify({name, surname, birth, address})
    }

    fetch('http://localhost:8000/api/new', options).then(res => {
        console.log(res)
        updateStudents()
        document.getElementById('name').value = ''
        document.getElementById('surname').value = ''
        document.getElementById('birth').value = ''
        document.getElementById('address').value = ''
    }
    )
}

function tempId(obj) {
    let id = obj.parentElement.parentElement.id.substr(8,)
    localStorage.setItem('tempId', id)
}

function delStudent(obj) {
    let id = localStorage.getItem('tempId')

    const options = {
                        method: 'DELETE',
                        headers: new Headers({'content-type': 'application/json'}),
                        body: JSON.stringify({id})
    }

    fetch('http://localhost:8000/api/del', options).then(res => {
        console.log(res)
        updateStudents()
        localStorage.clear()
    })
}

function attStudent(obj) {
    let id = obj.parentElement.parentElement.id.substr(8,)
    const options = {
                        method: 'POST',
                        headers: new Headers({'content-type':'application/json'}),
                        body: JSON.stringify({id})
    }
    
    let promise = fetch('http://localhost:8000/api/student', options).then(res => {
        return res.json()
    })

    promise.then(obj => {
        const student = JSON.parse(obj)

        let attElement = `<div id="student_${student.id}" class="card mb-3">
            <div class="card-header">
                <h4 class="card-tittle">Atualizar dados</h4>
            </div>
            <div id="cardBodyAtt" class="d-flex flex-column w-50 card-body" data-bs-parent="#studentList">
                <input class="mb-2 p-2" type="text" name="newName" id="newName">
                <input class="mb-2 p-2" type="text" name="newSurname" id="newSurname">
                <input class="mb-2 p-2" type="date" name="newBirth" id="newBirth">
                <input class="mb-2 p-2" type="text" name="newAddress" id="newAddress">
            </div>
            <div class="card-footer">
                <input onclick="saveData(this)" class="btn btn-info" type="button" value="Salvar">
                <input onclick="updateStudents()" class="btn btn-secondary" type="button" value="Cancelar">
            </div>
        </div>`
        document.getElementById(`container_${id}`).innerHTML = attElement
        document.getElementById('newName').value = student.name
        document.getElementById('newSurname').value = student.surname
        document.getElementById('newBirth').value = student.birth
        document.getElementById('newAddress').value = student.address
    })
    
}

function saveData(obj) {
    const id = obj.parentElement.parentElement.id.substr(8,)
    const newName = document.getElementById('newName').value
    const newSurname = document.getElementById('newSurname').value
    const newBirth = document.getElementById('newBirth').value
    const newAddress = document.getElementById('newAddress').value

    const options = {
                        method: 'PUT',
                        headers: new Headers({'content-type': 'application/json'}),
                        body: JSON.stringify({id, newName, newSurname, newBirth, newAddress})
    }

    fetch('http://localhost:8000/api/att', options).then( res => {
        console.log(res)
        updateStudents()
    })
}