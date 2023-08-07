const express = require('express');
const app = express();
const PORT = process.env.port || 3000;
const path = require('path');
const hbs = require('hbs');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'views'));
// hbs.registerPartials()

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.send("Welcome to about page!")
})

app.get('/weather', (req, res) => {
    res.send("Welcome to weather app!")
})

app.get('*', (req, res) => {
    res.send("Welcome to error 404 page!")
})


app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}...`);
});