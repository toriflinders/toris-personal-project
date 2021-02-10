require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const stripe = require('stripe')(process.env.SECRET_KEY)
const nodemailer = require('nodemailer')
const authCtrl = require('./Controllers/authController')
const announceCtrl = require('./Controllers/announceController')
const artCtrl = require('./Controllers/artController')
const invoiceCtrl = require('./Controllers/invoiceController')
const emailCtrl = require('./Controllers/emailController')
const path = require('path')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, SERVER_EMAIL, SERVER_PASS} = process.env
const app = express()

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}))

const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      user: SERVER_EMAIL,
      pass: SERVER_PASS
    }
})
app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  app.set('transporter', transporter)
  app.set('stripe', stripe)
  app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`))
  console.log('database/db connected')
})


// Other Endpoints



app.post('/checkout/:art_invoice_id', invoiceCtrl.createInvoice)
app.post('/email', emailCtrl.sendEmail)
// app.post('/email', {emailTo, emailFrom, content})

// Art Endpoints
app.get('/art/:artist_id', artCtrl.getArt)
// app.post('/add_art', artCtrl.createArt)
// app.delete('/art/:art_id', artCtrl.deleteArt)


// Auth Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)


// Announcement Endpoints
app.post('/announcement', announceCtrl.createAnnouncement)
app.get('/announcements/:author_id', announceCtrl.getAnnouncements)
app.put('/announcement/:id', announceCtrl.editAnnouncement)
app.delete('/announcement/:id', announceCtrl.deleteAnnouncement)


// moved app.listen into massive so that server will not start listening until your database is connected. this is good practice, but not required for the project.
