const jwt = require('jsonwebtoken')
const token = jwt.sign({
    id: 1,
    name: 'Berkay',
    surname: 'Akcay',
    issuer: 'www.berkayakcay.com',
    audience: 'abc.com'
},
    'hello123456', { expiresIn: '2h' }
)

console.log(token)


const t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkJlcmtheSIsInN1cm5hbWUiOiJBa2NheSIsImlzc3VlciI6Ind3dy5iZXJrYXlha2NheS5jb20iLCJhdWRpZW5jZSI6ImFiYy5jb20iLCJpYXQiOjE2OTU1NzM2MDIsImV4cCI6MTY5NTU4MDgwMn0.szeubMKRpJ9-HE5yI6O7r1nxqj5wW52-xYyHdWIXPg8"

jwt.verify(t,'hello123456', (err, decodedToken) =>{
    if (err) {
        console.log(err)
    }

    console.log(decodedToken)
})

