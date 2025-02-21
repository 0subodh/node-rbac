import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
