// api/signin/route.js
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";

export async function POST(req) {
  console.log("inside signin route");
  try {
    const body = await req.json();
    await connectDB();
    const email = body.email;
    const password = body.password;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // console.log("Authenticated user:", user);

    return NextResponse.json(
      { message: "Sign in successful", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during sign-in:", error);
    return NextResponse.json(
      { error: "An error occurred during sign-in" },
      { status: 500 }
    );
  }
}
