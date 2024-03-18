const express = require("express")
const app = express()
const cors = require('cors')
const { default: mongoose } = require("mongoose")
// require('./config/db.js')
const UserModel =require('./models/Users')


app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/CRUD")

app.get('/', (req,res)=>{
    UserModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put("/updateUser/:id",(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},
        {
        firstName:req.body.firstName, 
        lastName:req.body.lastName, 
        email:req.body.email
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})

    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server starting at 3001");
})