const express = require('express')
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

const users = []

app.get('/', (req, res) => {
  res.render('home', {})
  console.log(users.length)
})

app.get('/users', (req, res) => {
  res.render('users', {users})
})

app.post('/users', (req, res, next) => {
  const username = req.body.name;
  users.push(username)
	res.redirect('/')
})

app.listen(3000)