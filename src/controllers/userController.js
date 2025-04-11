import {User} from "../models/users.js";

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required111" });
    }

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error("❌ Error creating user:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { addUser };
 