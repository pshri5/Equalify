const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const userModel =require("../models/user.model");
const { JWT_USER_PASSWORD } = require("../config/envConfig");

// Hash the user password
async function getHashPassword(password){
    const saltRounds = 3;
    return await bcrypt.hash(password,saltRounds);
}

// Signup
exports.register = async(req,res) => {
    try {
        const {name,email,password} = req.body;

        // Check if user already exists
        const user = await userModel.findOne({
            email
        })
        if(user){
            return res.status(400).json({
                error:"User is already registered!"
            });
        }

        // Hash the password and create the user
        const hashPassword = await getHashPassword(password);
        await userModel.create({
            name,
            email,
            password : hashPassword
        });

        return res.status(200).json({
            message:"User created successfully!"
        });

    } catch(error){
        console.log("Error during registering",error);
        return res.status(400).json({
            error:"Error creating user"
        });
    }
}

// Log In
exports.login = async(req,res) => {
    try {
        const {email,password} = req.body;

        // Check if user exists
        const user = await userModel.findOne({
            email : email
        });
        if(!user){
            return res.status(400).json({
                error:"User is not registered"
            });
        }

        // Verify password
        const isValid = await bcrypt.compare(password,user.password);
        if(!isValid){
            return res.status(400).json({
                error:"Incorrect password!"
            });
        }

        // Generate the token
        const token = jwt.sign({id : user._id},JWT_USER_PASSWORD);
        return res.status(200).json({
            message:"Login successful!",
            token : token
        });


    } catch(error){
        console.log(error);
        return res.status(400).json({
            error:"Error logging in"
        });
    }
}

// Get Profile
exports.getProfile = async (req,res) => {
    try{
        const user = await userModel.findOne({
            _id : req.id
        });

        if(!user){
            return res.status(403).json({
                error : "You are not registered!"
            });
        }

        return res.status(200).json({
            name : user.name,
            email : user.email
        });

    } catch(error) {
        return res.status(403).json({
            error : "You are not registered!"
        });
    }
}

// Set Profile
exports.setProfile = async (req,res) => {
    const {name,password} = req.body;

    try {
        const updateFields = {};
        // Check if the name is provided in body
        if(name){
            updateFields.name = name;
        }
        // Check if password is provided in body
        if(password){
            // Hash the password and create the user
            const hashPassword = await getHashPassword(password);
            updateFields.password = hashPassword
        }

        await userModel.updateOne(
            {_id : req.id},
            {$set : { updateFields }}
        )
        return res.status(200).json({
            message : "User updated!"
        })
    } catch(error) {
        console.log(error);
        return res.status(400).json({
            message : "Error updating info"
        })
    }
}