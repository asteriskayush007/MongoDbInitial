const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req,res) => {
    res.send("hey")
})

app.get('/create',async (req,res) => {
    let createduser = await userModel.create({
        name: "Ayushmaan Yadav",
        age: 17,
        username: "Anshu@007",
        email: "ayushmaansinghyadav18@gmail.com",
    })
    res.send(createduser);
})


app.get('/update', async(req,res) => {
    
    let updateuser = await userModel.findOneAndUpdate({name:"Ayushmaan Yadav",username: "Anshu__007",age: 19,new:true})
    

    res.send(updateuser);
})


app.get('/read', async (req,res) => {
    let users = await userModel.find();

    res.send(users);
})

app.get('/delete', async (req,res) => {
    let users = await userModel.findOneAndDelete({name: "Aman diwedi"});

    res.send(users);
})



app.listen(3000);