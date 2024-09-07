const asyncHandler = require('express-async-handler')

const getUsers = asyncHandler(async(req, res)=>{
    res.json({message: "Get users"})})

const addUser = asyncHandler(async(req, res)=>{
    res.json({message: "Add user"})})

const updateUser = asyncHandler(async(req, res)=>{
    res.json({message: `Update user ${req.params.id}`})})

const deleteUser = asyncHandler(async(req, res)=>{
    res.json({message: `Delete user ${req.params.id}`})})

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}
