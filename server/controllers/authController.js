const User = require("../models/userModel");


async function userSignIn(req,res) {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "Please provide email and password"});
        }
        // Check if user exists in the database
        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({message: "Invalid email or password"});
        }
        // Check if password is correct
        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(401).json({message: "Invalid email or password"});
        }
        // Generate JWT token
        //const token = user.generateToken();
        res.status(200).json({message: "User signed in successfully", user});
        
    } catch (error) {
        res.status(500).json({message: "Server error", error});
    }
    
}

module.exports = {
    userSignIn,
}