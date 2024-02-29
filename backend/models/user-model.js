import { Schema , model} from 'mongoose';

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic:{
        type: String,
        required: true,
    }
},{timestamps: true});

const User = model('User',UserSchema);

export default User;