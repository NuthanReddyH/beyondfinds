const bcrypt = require('bcrypt');
const User = require('./models/User');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getUser: async (_, { username, password }) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          throw new Error("User not found.");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid password.");
        }

        return user;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    registerUser: async (_, { username, email, password, confirmPassword }) => {
      try {

        if (password !== confirmPassword) {
          throw new Error('Passwords do not match.');
        }
  
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
          throw new Error('Username already in use.');
        }
  
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
          throw new Error('Email already in use.');
        }
  
        const hashedPassword = await bcrypt.hash(password, 10);
  
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });
  
        await newUser.save();
  
       return newUser;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
