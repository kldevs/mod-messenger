const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

const dbConnectionStr = process.env.DB_STRING
const dbName = 'mod-messenger-db'
const dbCollection = 'messages'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db(dbName)
    const messagesCollection = db.collection(dbCollection)
    console.log(`Connected to Database: ${dbName}`)
		
		app.get('/', (req, res) => {
			messagesCollection.find().toArray()
			.then(data => {
				res.render('index.ejs', { messages: data })
			})
			.catch(error => console.error(error))
		})
		
		app.get('/login', (req, res) => {
				res.render('login.ejs')
		})
		
		app.post('/login', (req, res) => {
        res.redirect('/')
		})

		app.post('/messages', (req, res) => {
      messagesCollection.insertOne({userName: req.body.userName, userMessage: req.body.userMessage, dateTime: new Date()})
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
    })
		
	})

app.listen(process.env.PORT || PORT, ()=>{
	console.log(`Listening on port ${PORT}`)
})
