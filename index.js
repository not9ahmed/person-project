// import express
const express = require('express');

// create app instance of express
const app = new express()

// Setting a static page
app.use(express.static('public'))


// middle ware to allow accessing the body of a form
app.use(express.urlencoded({ extended: true }))

// to parse json requests
app.use(express.json())


// Setting up a view engine
app.set('view engine', 'ejs')


// Setting up a route
// main page static
app.get('/', (req, res) => {
    res.render('index')
})


// import the router from users.js
// can use it to map routers with the requires
const userRouter = require('./routes/users')




// Set up the main url part
app.use('/users', userRouter)


// next mostly used in middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


// Listen on port 3000
app.listen(3000)