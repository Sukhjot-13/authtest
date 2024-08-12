// app/api/authenticate/route.js
"use server";

import axios from "axios";

export async function authenticateUser(email, password) {
  console.log("in authenticateUser");
  try {
    const response = await axios.post("http://localhost:3000/api/signin", {
      email,
      password,
    });
    const user = response.data.user;
    return user || null;
  } catch (error) {
    console.error("Authorization error:", error);
    return null;
  }
}
