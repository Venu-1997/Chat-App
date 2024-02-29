import User from "../models/user-model.js";


export const getUsersForSideBar = async (req,res) => {
    try{
        const loggedInUser = req.user._id;

        const filteredUsers = await User.find({_id : {$ne:loggedInUser}}).select("-password"); //.select("-password") removes the password info from the data when filtered for all users.

        res.status(200).json(filteredUsers); 
    }
    catch(e){
        console.log("Error in getUsersForSideBar",e.message);
        return res.status(500).json({ error: "Internal server error"}); 
    }
}