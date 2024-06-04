const express = require('express')
const app = express()
const port = 3000

// main route / endpoint
app.get('/', (req, res) => {
    res.send('Hello Worlds!')
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