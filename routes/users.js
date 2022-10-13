const express = require('express')

const router = express.Router()


// Route users/
router.get('/', (req, res) => {


    console.log(req.query.name)

    res.send('User List')

})


// Route 3 
// Static put it above the dynamic userID link because it will mess things up
router.get('/new', (req, res) => {
    res.render('users/new', {firstName: "Test"})
})


// Route 4 to create a user
router.post('/', (req, res) => {


    const isValid = false


    // no need I think
    if(isValid){

        users.push({ firstName: req.body.firstName })

        // users.length-1 new user id
        res.redirect(`/users/${users.length-1}`)
    } else {
        console.log('Error')
        res.render('users/new', { firstName: req.body.firstName })
    }



    // get the firstName from the post request
    // cannot access the req.body without middleware
    console.log(req.body.firstName)



    res.send('Hii')
})



// url with user id
// return a page user info
router
.route('/:userId')
    .get((req, res) => {

        // Get the parameter from url
        let userID = req.params.userId


        console.log(req.user)

        res.send(`Get user with ID ${userID}`)
    })
    .put((req, res) => {

        // Get the parameter from url
        let userID = req.params.userId

        res.send(`Put user with ID ${userID}`)
    })
    .delete((req, res) => {

        // Get the parameter from url
        let userID = req.params.userId

        res.send(`Delete user with ID ${userID}`)
    })


// This instead needs to get from database
const users = [{ name: 'kyle'}, { name: 'Ahmed'}]




// Function that runs whenever inside the callback when it finds this parameter
// this is middleware and middleware is between the request and response so the page keeps on loading
router.param("userId", (req, res, next, id) => {

    req.user = users[id]


    // to run the next line which is .get()
    next()
})



module.exports = router