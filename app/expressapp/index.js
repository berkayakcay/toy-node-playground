const express = require('express')
const app = express()
const appRouters = require('./router/router')

const PORT = 5000

app.use('/assets', express.static('assets'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/status', (req, res) => {
    res.json({ status: 'healthy' })
})


app.use(appRouters)

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})