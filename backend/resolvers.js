const bcrypt = require("bcrypt");
const User = require("./models/User");

const resolvers = {
  Query: {
    getUserByUsername: async (_, { username }) => {
      try {
        const user = await User.findOne({ username });
        return user;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    registerUser: async (_, { username, email, password, confirmPassword }) => {
      try {
        // Check if the password and confirmPassword match
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match.");
        }

        // Check if a user with the same username or email already exists
        const existingUser = await User.findOne({
          $or: [{ username }, { email }],
        });
        if (existingUser) {
          throw new Error("Username or email already in use.");
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
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
