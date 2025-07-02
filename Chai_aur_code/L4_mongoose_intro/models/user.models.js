import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // usernames should be unique
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true, // emails should be unique
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // minimum password length
    },
    // Optionally, you can add more fields:
    isAdmin: {
        type: Boolean,
        default: false
    },
    profilePic: {
        type: String,
        default: ""
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
