const express = require("express")

const router = express.Router()

router.get("/", (req,res)=>{
    res.render("books/index")
})

router.get("/new", (req,res)=>{
    res.render("books/new")
} )

router.post("/",(req,res)=>{
    res.send("create new book")
})

module.exports = router