if(process.env.NODE_ENV !=="production"){
    require("dotenv").config()
}

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const expressLayout = require("express-ejs-layouts")
const indexRouter = require("./routes/index")
const authorRouter = require("./routes/author")
const bookRouter = require("./routes/book")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
 
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on(("error"), (error)=>{console.error(Error)})
db.once("open",()=>{console.log("mongodb database connection is successful")})

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(expressLayout)
app.use("/", indexRouter)
app.use("/author", authorRouter)
app.use("/book", bookRouter)





app.listen(process.env.PORT || 3000)