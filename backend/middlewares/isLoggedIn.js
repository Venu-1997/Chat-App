import jwt from 'jsonwebtoken';
import User from '../models/user-model.js';

const isLoggedIn = async (req,res,next) => {
    try{
        const token = req.cookies.jwt;
        //check if credentials are provided are not

        if(!token){
            return res.status(401).json({ error: "Unauthorized - No token Provided"}); 
        }

        //check if the provided details matches with the JWT password or not
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        
        if(!decodedToken){
            return res.status(401).json({ error: "Unauthorized - Invalid Token"}); 
        }

        //check if the user with given data exists or not

        const userData = await User.findById(decodedToken.userId).select("-password");

        if(!userData){
            return res.status(404).json({ error: "User not found"}); 
        }

        req.user = userData;

        next();
    }
    catch(e){
        console.log("Error in isLoggedIn middleware",e.message);
        return res.status(500).json({ error: "Internal server error"}); 
    }
    
    
}
export default isLoggedIn;