import { NextResponse } from "next/server"

export const revalidate = 10

export function GET() {
  console.log("GET /api/time")
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
  })
}
