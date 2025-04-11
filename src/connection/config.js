import mongoose from "mongoose";

const connect = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`🚀 MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1); 
  }
};

export default connect;
