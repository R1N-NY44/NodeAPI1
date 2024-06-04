const express = require('express')
const app = express()
const port = 3000

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

// post
app.post('/login', (req, res) => {
    // if (req.name === "user") {
        res.send('Login success!')
    // }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})