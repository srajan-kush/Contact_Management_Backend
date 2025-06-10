const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered!");
    }

    res.json({ message: "Register the user"});
});


const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "login user"});
});

const getUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information"});
});

module.exports = {registerUser,loginUser,getUser};