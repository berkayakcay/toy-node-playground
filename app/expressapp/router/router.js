const router = require('express').Router()
const userController = require('../controller/userController')


// USER
router.get('/user', userController.Index)
router.get('/user/:id', userController.GetUser)

//  404
router.use((req, res) => {
    res.status(404)
    res.json({ status: 404, message: req.url })
})


module.exports = router