import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";
import { connectDB } from "@/utils/mongoose";

// connect to database
connectDB();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { name, email, password, phone, aadharID } = reqBody;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({
        status: 400,
        body: {
          message: "User already exists",
        },
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      aadharID,
    });

    // save user
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created!", savedUser },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.message === "Bad request") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
};
