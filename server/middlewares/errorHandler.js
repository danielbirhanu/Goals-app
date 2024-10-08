const errorHandler = (err, req, res, next)=>{
    const statuscode = res.statuscode ? res.statuscode : 500

    res.statuscode(statuscode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV==='production' ? null : err.stack
    })

    next()
}

module.exports = {
    errorHandler,
}