// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let User;

try {
  // Check if the model is already defined
  User = mongoose.model('User');
} catch {
  // If the model is not defined, define it
  User = mongoose.model('User', userSchema);
}

export default User;
