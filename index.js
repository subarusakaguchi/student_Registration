const express = require('express')
const path = require('path')
const routerApi = require('./routes/api')
const app = express()
const PORT = 8000

app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.use('/api', routerApi)
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT)
})