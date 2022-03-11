const express = require("express");
const router = express.Router();

const userData = [
    {
        name: "hassan",
        profession: "developer",
        id: 1
    },
    {
        name: "wasay",
        profession: "developer",
        id: 2
    },
    {
        name: "anus",
        profession: "developer",
        id: 3
    }
]

router.get('/users', (req, res) => {
    console.log('It works');
    res.send(userData)
})

router.get('/users/:id', (req, res) => {

    const { id } = req.params;
    const findUser = userData.filter(user => user.id == id);
    if (findUser.length !== 0) {
        return res.send({ success: true, data: findUser })
    } else {
        res.status(404).send({ success: false, message: "Users Not Found" })
    }
})

router.post('/users/register', (req, res) => {

    // console.log(req.body);
    // res.send("It works");

    userData.push(req.body)
    res.send({ success: true, message:'User added Successfully'})
})

module.exports = router;