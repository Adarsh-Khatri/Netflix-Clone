import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: [true, "Email Already Exists"],
    max: 50,
  },
  likedMovies: Array,
});


export const UserModel = mongoose.model('User', userSchema);