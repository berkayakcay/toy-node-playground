const express = require('express')
const router = express.Router()
const userController = require('../controller/usersController')

router.use('/assets',express.static('assets'))


// USER
router.get('/users', userController.Users)
router.get('/users/:id', userController.GetUsers)



router.get('/status', (req, res) => {
    res.json({ status: 'healthy' })
})

//  404
router.use((req, res) => {
    res.status(404)
    res.json({ status: 404, message: req.url })
})

module.exports = router