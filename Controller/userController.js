const jwt = require('jsonwebtoken');
const fs = require('fs');
const { nextTick } = require('process');
const e = require('express');

const arr = [
    {
        id: 1,
        name: "abc",
        email: "a@gmail.com",
        role: "admin",
        age: 12,
        gender: "female"
    },
    {
        id: 2,
        name: "pqr",
        email: "p@gmail.com",
        role: "user",
        age: 15,
        gender: "male"
    },
    {
        id: 3,
        name: "xyz",
        email: "z@gmail.com",
        role: "user",
        age: 25,
        gender: "female"
    },
    {
        id: 4,
        name: "ram",
        email: "ram@gmail.com",
        role: "user",
        age: 20,
        gender: "male"
    }
]

const getData = (req, res) => {
    try {
        console.log("api calling");
        return res.status(200).json({ data: arr, message: "data get successfully" })
    } catch (error) {
        console.log(error);
    }
}

const addData = (req, res) => {
    try {
        const count = arr[arr.length - 1].id + 1;
        arr.push({ ...req.body, id: count })
        console.log("add data api s called");
        const index = arr.findIndex((value) => value.id == count);
        res.status(200).json({ data: arr[index], message: "data add successfully" })
    } catch (error) {
        console.log(error);
    }
}

const updateData = (req, res) => {
    try {
        if (!req.query.id) {
            return res.json({ message: "please enter id which data you need update" })
        }

        const index = arr.findIndex((value) => value.id == req.query.id);
        arr.splice(index, 1, { ...req.body, id: req.query.id });
        return res.status(200).json({ data: arr[index], message: "data update successfully" })


    } catch (error) {
        console.log(error);
    }
}

const deleteData = (req, res) => {
    try {
        if (!req.query.id) {
            return res.json({ message: "please enter id" })
        } else {
            const index = arr.findIndex((value) => value.id == req.query.id);
            arr.splice(index, 1);
            return res.status(200).json({ message: "data delete successfully" })
        }

    } catch (error) {
        console.log(error);
    }
}
let token;
const login = (req, res, next) => {
    try {
        arr.find((value) => {
            if (req.body.email == value.email) {
                token = jwt.sign({ email: req.body.email, password: req.body.password }, 'private key' , {expiresIn : '1h' });
                console.log('token :>> ', token);
                return res.send({ token: token });
            }
            res.send({ message: "please enter valid email" })
        })
        next()
    } catch (error) {
        console.log('error :>> ', error);   
        return res.status(500).json({ message: error })
    }
}

const verify = (req, res) => {
    try {
        if (token) {
            const key = fs.readFileSync('hello.txt', 'utf-8')
            console.log(key);
            jwt.verify(token, 'private key', function (err, data) {
                if (err) throw new Error(err)
                console.log(data);
            });
        }
    } catch (error) {
        console.log('error :>> ', error);
        return res.status(500).json({ message: error })
    }
}
module.exports = { getData, addData, updateData, deleteData, login, verify }