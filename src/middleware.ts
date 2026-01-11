import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // 如果不是登录页
  if (request.nextUrl.pathname !== "/login") {
    // 并且没有token
    const token = request.cookies.get("token")?.value
    if (!token) {
      // 拦截到登录页
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
