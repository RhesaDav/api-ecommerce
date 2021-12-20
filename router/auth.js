const router = require('express').Router()
const User = require('../models/User')

router.post('/register',  (req, res) => {
    const newUser = new User ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    console.log(User)
    try {
    const savedUser =  newUser.save()
    res.status(200).json({message: savedUser})
    } catch (err) {
    res.status(500).json(err)
    }
    console.log(savedUser)
    
})


module.exports = router