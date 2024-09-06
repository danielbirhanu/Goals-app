const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.json({message: "Get users"})}),
router.post('/', (req, res)=>{
    res.json({message: "Add user"})}),
router.put('/:id', (req, res)=>{
    res.json({message: `Update user ${req.params.id}`})}),
router.delete('/', (req, res)=>{
    res.json({message: `Delete user ${req.params.id}`})
})

module.exports = router