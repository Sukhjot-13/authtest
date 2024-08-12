// // auth.js
// import NextAuth from "next-auth";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [],
// });
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// // import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import mongoose from "mongoose";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         // await mongoose.connect(process.env.MONGODB_URI); // Ensure you're connected to MongoDB
//         // const user = await User.findOne({ email: credentials.email });
//         // if (user && bcrypt.compareSync(credentials.password, user.password)) {
//         //   return {
//         //     id: user._id,
//         //     name: user.name,
//         //     email: user.email,
//         //     role: user.role,
//         //   };
//         // } else {
//         //   return null;
//         // }

//         console.log("credentials", credentials);
//         return {
//           email: credentials.email,
//           password: credentials.password,
//         };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin", // Customize this if you have a custom sign-in page
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.name = user.name;
//         token.email = user.email;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = {
//         id: token.id,
//         name: token.name,
//         email: token.email,
//         role: token.role,
//       };
//       return session;
//     },
//   },
// });
/////
/////
/////
/////
/////
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         console.log("in authorize");
//         // Replace this with your own logic to validate the user
//         if (
//           credentials.email === "test1@test.com" &&
//           credentials.password === "123456"
//         ) {
//           return {
//             name: "User",
//             email: credentials.email,
//           };
//         } else {
//           throw new Error("Invalid credentials");
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.name = user.name;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = {
//         name: token.name,
//         email: token.email,
//       };
//       return session;
//     },
//   },
// });
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authenticateUser } from "./actions/User";
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         console.log("in authorize");
//         const user= authenticateUser(credentials.email, credentials.password);
//         // Replace this with your own logic to validate the user
//         if (
//           credentials.email === "test1@test.com" &&
//           credentials.password === "123456"
//         ) {
//           return {
//             name: "User",
//             email: credentials.email,
//           };
//         } else {
//           throw new Error("Invalid credentials");
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.name = user.name;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = {
//         name: token.name,
//         email: token.email,
//       };
//       return session;
//     },
//   },
// });
//////
//////
//////
//////
//////
//////
//////
//////
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authenticateUser } from "./actions/User";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         console.log("in authorize");
//         const { user, error } = await authenticateUser(
//           credentials.email,
//           credentials.password
//         );

//         if (error) {
//           throw new Error(error);
//         }
//         if (user) {
//           return user; // Return the user object if authentication is successful
//         } else {
//           throw new Error("Invalid credentials");
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.name = user.name;
//         token.email = user.email;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = {
//         name: token.name,
//         email: token.email,
//         role: token.role, // Pass the role to the session
//       };
//       return session;
//     },
//   },
// });
/////////
/////////
/////////
/////////
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authenticateUser } from "./actions/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const user = await authenticateUser(
            credentials.email,
            credentials.password
          );

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id; // Include userId in the token
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        role: token.role, // Pass the role to the session
      };
      return session;
    },
  },
});
