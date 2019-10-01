const path = require('path')
const express = require('express')
const hbs = require('hbs')
 
const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handle bar engins and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Muhammad Jasim'
    })    
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Muhammad Jasim'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        value: 'Hello Help Page',
        title: 'Help',
        name: 'Muhammad Jasim'
    })
})


app.get('/weather' , (req, res) => {
    res.send({
        forcast: 'It is cloudy',
        location: 'Islamabad'
    })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404',
        errorMessage: 'Help article not found!',
        name: 'Muhammad Jasim'
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found!',
        name: 'Muhammad Jasim'
    });
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
