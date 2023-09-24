const jwt = require('jsonwebtoken')




module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.authorization.split(' ')[1]
        wt.verify(token, 'hello123456', (err, decodedToken) => {
            if (err) {
                console.log(err)
            }
            console.log(decodedToken)
            req.user = decodedToken.id
            next()
        })
    } else {
        return res.status(401)
    }
}