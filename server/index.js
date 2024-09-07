const express = require('express')
const colors = require('colors')
const goalRouter = require('./routes/goalRoutes')
const connectDB = require('./config/db')
const app = express()

require("dotenv").config()
connectDB()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/user', goalRouter)

app.listen(port, ()=>{
    console.log(`server running on ${port} successfully!`)
})