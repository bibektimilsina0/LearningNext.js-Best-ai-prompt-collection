import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/user"
import connectToDB from "@/utils/database";

const handle = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  async session({ session }) {
    try {
      await connectToDB(); // Make sure your database connection is established

      const sessionUser = await User.findOne({
        email: session.user.email
      });

      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
      }

    } catch (error) {
      console.error('Error retrieving user from the database:', error);
  
  }

    return session;
  },

  async signIn({ profile,user }) {
    try {
      await connectToDB(); // Make sure your database connection is established

      const existingUser = await User.findOne({ email: profile.email });

      if (!existingUser) {
        const newUser = await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
        await newUser.save()
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle the error, e.g., redirect to an error page
    }
  },
});

export { handle as GET, handle as POST };
