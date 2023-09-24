const Index = (req, res) => {
    res.sendFile(__dirname + '/user.html')
}


const GetUser = (req, res) => {
    console.log(req.params)
    const q = req.query
    console.log(q)
    res.json({ status: req.params.id })
}

module.exports = {
    Index,
    GetUser
}