require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const mysql  = require('mysql')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('./public'))
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist/'))
app.use('/', routes);

let server = app.listen(process.env.PORT)
console.log(`The server is running and listening on port ${server.address().port}`)

