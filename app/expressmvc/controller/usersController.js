const Users = (req, res) => {
    res.render('users', { title: 'User Page'})
}


const GetUsers = (req, res) => {
    console.log(req.params)
    const q = req.query
    console.log(q)
    res.json({ status: req.params.id })
}

module.exports = {
    Users,
    GetUsers
}