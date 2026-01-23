import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// Mock users database
const users = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "user@example.com",
    password: "user123",
    name: "Standard User",
    role: "user",
  },
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = users.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password
        )

        if (!user) {
          throw new Error("Invalid credentials")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user && token.role) {
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})
