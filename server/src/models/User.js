import mongoose from 'mongoose';

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /\S+@\S+\.\S+/.test(email);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) => {
        return password.length >= 6;
      },
      message: 'Password must be at least 6 characters long',
    },
  },
  description: {
    type: String,
  },
  profileImg: {
    type: String,
    default: null,
  },
  age: {
    type: Number,
    min: [1, 'Age cannot be less than 1'],
    max: [150, 'Age cannot be greater than 150'],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  location: {
    type: String,
  },
  availability: {
    type: String,
  },
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
  },
  interests: {
    type: String
  },
  phoneNumber: {
    type: String,
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
  equipment: [
    {
        type: String,
    }
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  hikeBuddy: {
    type: Boolean,
    default: false,
    validate: {
      validator: (value) => {
        return typeof value === 'boolean';
      },
      message: 'hikeBuddy must be a boolean value',
    },
  }
});

const UserModel = mongoose.model('User', User);

export default UserModel;