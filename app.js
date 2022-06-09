const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

// express template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`)
})