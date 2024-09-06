const express = require("express")
const app = express()

require("dotenv").config()

const goalRouter = require("./routes/goalRoutes")
const port = process.env.PORT

app.use(express.json())
app.use('/api/user', goalRouter)

app.listen(port, ()=>{
    console.log(`server running on ${port} successfully!`)
})