const mongoose = require('mongoose')


const connectDB = async () => {
    try{
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to the DB successfully: ${(await conn).Connection.host}`.cyan.underline)
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB