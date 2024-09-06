const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const port = process.env.PORT


console.log(dotenv)

app.get('/api/user', (req, res) => {
    res.json({message: "Daniel is here"})
})

app.listen(port, ()=>{
    console.log(`server running on ${port} successfully!`)
})