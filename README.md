# Djogo Admin

A Next.js website with NextAuth authentication featuring example logins for admin and standard users.

## Features

- ✅ Next.js 16 with App Router
- ✅ NextAuth v5 (Auth.js) for authentication
- ✅ TypeScript support
- ✅ Tailwind CSS for styling
- ✅ Example login credentials (admin and standard user)
- ✅ Protected routes with middleware
- ✅ Role-based access control

## Demo Credentials

### Admin User
- Email: `admin@example.com`
- Password: `admin123`
- Role: `admin`

### Standard User
- Email: `user@example.com`
- Password: `user123`
- Role: `user`

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy the example file
cp .env.example .env.local

# Generate a secure secret (optional - a default is provided)
# npx auth secret
```

**Important:** The `.env.local` file contains the `AUTH_SECRET` required by NextAuth. A default secret is provided in the example, but you should generate a new one for production.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. You will be automatically redirected to the login page. Use one of the demo credentials above to sign in.

## Project Structure

- `/app` - Next.js App Router pages and layouts
  - `/login` - Login page
  - `/admin` - Admin-only page (requires admin role)
  - `/profile` - User profile page (accessible to all authenticated users)
  - `/api/auth/[...nextauth]` - NextAuth API route
- `/components` - Reusable React components
- `/auth.ts` - NextAuth configuration
- `/middleware.ts` - Route protection middleware

## Authentication Flow

1. Users are redirected to `/login` if not authenticated
2. Login with credentials (email/password)
3. Successful login redirects to the dashboard (`/`)
4. Admin users can access `/admin` page
5. All authenticated users can access `/profile` page
6. Sign out redirects back to login page

## Security Notes

⚠️ **Important**: This is a demo application with hardcoded credentials. In production:
- Use a proper database to store user credentials
- Hash passwords using bcrypt or similar
- Store sensitive data in environment variables
- Use HTTPS in production
- Generate a secure NEXTAUTH_SECRET

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## License

MIT
