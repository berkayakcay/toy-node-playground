const express = require('express')
const app = express()
const appRouters = require('./router/router')

const PORT = 5000


app.set('view engine', 'ejs')
app.use(appRouters)

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})