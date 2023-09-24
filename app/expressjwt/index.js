const express = require('express')
const app = express()
const router = express.Router()
const jwtAuthorization = require('./jwt.js')
const PORT = 5000


const data = [
    {
        code: "red",
        value: "#f00"
    },
    {
        code: "green",
        value: "#0f0"
    },
    {
        code: "blue",
        value: "#00f"
    },
    {
        code: "cyan",
        value: "#0ff"
    },
    {
        code: "magenta",
        value: "#f0f"
    },
    {
        code: "yellow",
        value: "#ff0"
    },
    {
        code: "black",
        value: "#000"
    }
]


router.get('/colors', (req, res) => {
    res.status(200).json(data)
})

router.post('/colors', (req, res) => {
    const body = req.body
    console.log(body)
    data.push(body)
    res.status(200).json(body)
})

router.delete('/colors/:code', (req, res) => {
    const code = req.params.code
    data.filter((color) => {
        return color.code != code
    })
    res.status(200).json()
})



app.use(express.json())
app.use(jwtAuthorization)
app.use(router)
app.listen(PORT, () => {
    console.log('server started..')
})