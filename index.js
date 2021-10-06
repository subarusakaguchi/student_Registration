const express = require('express')
const path = require('path')
const routerApi = require('./routes/api')
const app = express()
const PORT = 8000

app.use('/api', routerApi)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log('Servidor rodando na porta: ' + PORT)
})