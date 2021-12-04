const express = require("express")
const app = express() 
app.use(express.json())

let users = [
    {
        id:0,
        name:"AHMED",
        grade:"m3alem => 5dem checkpoint callback ..."
    },
    {
        id:1,
        name:"Ayoub",
        grade:"m5delech checkpoint 3andi devoirat"
    },
    {
        id:2,
        name:"Amir",
        grade:"m5delech checkpoint deplacement"
    }
]

// CRUD Create(POST) READ (GET) Update(PUT) Delete(DELETE)
// get all users
app.get("/users",(req,res)=> {
    res.send(users)
})

// add user
app.post("/users",(req,res) => {
    let newUser = req.body
    users = [...users,newUser]
    res.send(users)
})

// get one user
app.get("/users/:id",(req,res) => {
    const id = req.params.id
    const findedUser = users.find(user => user.id == id)
    res.send(findedUser)
})

// edit user
app.put("/users/:userID",(req,res) => {
    const userID = req.params.userID
    users = users.map(user => user.id == userID ? {...user,...req.body} : user)
    res.send(users)
})

// delete User 
app.delete("/users/:userID",(req,res) => {  
    const userID = req.params.userID
    users = users.filter(user => user.id != userID)
    res.send(users)
})

const PORT= 5000
app.listen(PORT,err =>err ? console.error(err) : console.log(`Server is runing on port ${PORT}`) )