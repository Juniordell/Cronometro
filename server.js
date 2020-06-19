const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('initial', {
        title: 'Início'
    })
})

app.get('/time', (req, res) => {
    console.log(req.body)

    res.render('index', {
        inputTime: req.body.inputTime,
        title: 'Cronômetro'
    })
})

app.get('/drag', (req, res) => {
    res.render('drag-page', {
        title: 'Drag and Drop'
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
})