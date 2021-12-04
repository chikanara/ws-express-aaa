const express = require("express");
const app = express()

// app.use(express.static("public"))

function logger(req,res,next) {
    console.table({"url":req.url,"method":req.method})
    next()
}


// console.log("Hello express and node")
app.get("/",(req,res)=> {
    res.send("<h1 style='color:red'>Hello bou7mid</h1>")
    // console.log("url",req.url)
    // console.log("method",req.method)
})

app.get('/style.css',(req,res) => {
    res.sendFile(__dirname + "/public/style.css")
})

app.get('/home',logger,(req,res) => {
    res.sendFile(__dirname + '/public/index.htm')
    // console.log("url",req.url)
    // console.log("method",req.method)
})

app.get('/contact',logger,(req,res) => {
    res.sendFile(__dirname + '/public/contact.htm')
    // console.log("url",req.url)
    // console.log("method",req.method)
})

app.get('/services',(req,res) => {
    res.sendFile(__dirname + '/public/services.htm')
    // console.log("url",req.url)
    // console.log("method",req.method)
})



const PORT = 5000;
app.listen(PORT,err =>  err ? console.error(err) : console.log(`Server is runing on port ${PORT}`))