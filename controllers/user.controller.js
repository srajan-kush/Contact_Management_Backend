const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    // hash password
    const hashedPassword = await bcrypt.hash(password,10);
    // console.log("Hashed Password: ",hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if(user){
        // console.log(user);
        res.status(201).json({_id: user._id, email: user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
});


const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are required!");
    }

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, 
        process.env.SECREAT_TOKEN,
        { expiresIn: "1m" }
    );
        res.status(200).json({ accessToken });
    }else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
});

const getUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information"});
});

module.exports = {registerUser,loginUser,getUser};