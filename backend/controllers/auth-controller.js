import User from "../models/user-model.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utilities/generateToken.js";

export const signup = async(req,res) => {
    try{
        const {fullName , userName , password , confirmPassword , gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords don't match"});
        }
        const userData = await User.findOne({userName});
        if(userData){
            return res.status(400).json({ error: "Username already exists"}); 
        }

        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullName , userName , password: hashedPassword , gender , profilePic: gender === "male" ? boyProfilePicture : girlProfilePicture
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save(); //save to database
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic:newUser.profilePic,
            });
        }
        else{
            res.status(500).json({ error: "Invalid User Data"}); 
        }  
    }

    catch(e){
        console.log("Error in Signup Controller",e.message);
        return res.status(500).json({ error: "Error in Signup Controller"}); 
    }
}

export const login = async(req,res) => {
    try{
        const { userName , password } = req.body;
        const userData = await User.findOne({userName});
        const isCorrectPassword = await bcrypt.compare(password, userData?.password || "");

        if(!userData || !isCorrectPassword ){
            return res.status(400).json({ error: "Invalid UserName or Password"}); 
        }

        generateTokenAndSetCookie(userData._id,res);

        res.status(200).json({
            _id: userData._id,
            fullName: userData.fullName,
            userName: userData.userName,
            profilePic: userData.profilePic,
        });

    }
    catch(e){
        console.log("Error in Login Controller",e.message);
        return res.status(500).json({ error: "Error in Login Controller"}); 
    }
}

export const logout = (req,res) => {
    try{
        res.cookie("jwt","",{maxAge : 0});
        res.status(200).json({ message: "Logged Out Successfully"});
    }
    catch(e){
        console.log("Error in Logout Controller",e.message);
        return res.status(500).json({ error: "Error in Logout Controller"}); 
    }
}