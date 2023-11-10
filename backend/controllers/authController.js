const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JWT_SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password." });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ user, token });
  } catch (error) {
    console.log({error})
    return res.status(500).json({ error: "Server error." });
  }
};


const register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match.' });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already in use.' });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    console.log({error})
    return res.status(500).json({ error: "Server error." });
  }
};

const updateUser = async (req, res) => {
  const { username } = req.body; // Extract the username
  const updatedFields = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Check if a file is uploaded and update the avatar field
    if (req.file) {
      const avatarPath = req.file.path;
      updatedFields.profile = updatedFields.profile || {}; // Ensure the profile object exists
      updatedFields.profile.avatar = avatarPath; // Update the avatar path
    }

    // Handle password update with hashing if provided
    if (updatedFields.newPassword) {
      const hashedPassword = await bcrypt.hash(updatedFields.newPassword, 10);
      updatedFields.password = hashedPassword;
    }

    // Prevent certain fields from being updated
    ['email', 'username', 'newPassword'].forEach(field => delete updatedFields[field]);

    // Update user fields
    Object.keys(updatedFields).forEach(field => {
      if (field === 'profile' && typeof updatedFields[field] === 'object') {
        // Handle nested profile object
        Object.assign(user.profile, updatedFields[field]);
      } else {
        user[field] = updatedFields[field];
      }
    });
    //console.log({user})
    await user.save();

    return res.status(200).json({ message: "User updated successfully.", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error." });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users from the database
    // Optionally, select only the fields you want to send to the client for privacy reasons
    const userDtos = users.map(user => ({
      id: user._id,
      username: user.username,
      email: user.email
      // Do not send back sensitive data like passwords!
    }));
    return res.status(200).json(userDtos);
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error: "Server error while retrieving users." });
  }
};

const getUsersCount = async (req, res) => {
  try {
    const count = await User.countDocuments(); // This will count all documents in the collection
    return res.status(200).json({ count });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error: "Server error while retrieving users count." });
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params; 

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ error: "Server error while deleting the user." });
  }
};




module.exports = {
    login,
    register,
    updateUser,
    getUsers,
    deleteUser,
    getUsersCount
};
