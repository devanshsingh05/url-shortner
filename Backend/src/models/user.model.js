import mongoose from "mongoose"
// we will not store each user has generated how many short URLs

// we will store user id to each link generated
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    //add gravatar as default
    default: "https://www.gravatar.com/avatar/0000000000000000000000000000000?d=mp&f=y",
  }
  
});

const User = mongoose.model("User", userSchema);

export default User;