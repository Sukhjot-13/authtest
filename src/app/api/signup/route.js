// app/api/signup/route.js
import connectDB from "@/lib/dbConnect";
import User from "@/models/User"; // Adjust path if needed
import bcrypt from "bcryptjs";

export async function POST(req) {
  console.log("Inside signup route");
  try {
    const { email, password, name } = await req.json();

    // Connect to MongoDB
    connectDB();
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    return new Response(JSON.stringify({ message: "User created" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: "Failed to create user" }), {
      status: 500,
    });
  }
}
