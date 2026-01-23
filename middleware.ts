import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isOnLoginPage = req.nextUrl.pathname === "/login"
  const isOnApiAuthRoute = req.nextUrl.pathname.startsWith("/api/auth")

  // Allow access to API auth routes
  if (isOnApiAuthRoute) {
    return NextResponse.next()
  }

  // Redirect to login if not authenticated and not on login page
  if (!isLoggedIn && !isOnLoginPage) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // Redirect to home if logged in and on login page
  if (isLoggedIn && isOnLoginPage) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png).*)"],
}
