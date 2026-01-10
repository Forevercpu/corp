import db from "@/db"
import { NextRequest, NextResponse } from "next/server"
// GET => /api/articles
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const pagenum = Number(searchParams.get("pagenum")) || 1
  const pagesize = Number(searchParams.get("pagesize")) || 2
  const query = searchParams.get("query") || ""
  const data = db.data.posts
  let filteredData = query
    ? data.filter((item) => {
        const { id, ...rest } = item
        return Object.values(rest).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        )
      })
    : data
  const total = filteredData.length
  const startIndex = (pagenum - 1) * pagesize
  const endIndex = Math.min(startIndex + pagesize, total)
  filteredData =
    startIndex >= total ? [] : filteredData.slice(startIndex, endIndex)
  return NextResponse.json({
    code: 0,
    message: "success",
    data: filteredData,
    total: total,
  })
}

// POST => /api/articles
export async function POST(request: Request) {
  const data = await request.json()
  await db.update(({ posts }) =>
    posts.unshift({
      id: Date.now() + "",
      ...data,
    })
  )
  return NextResponse.json({
    code: 0,
    message: "success",
    data,
  })
}

// PUT => /api/articles/:id
export async function PUT(request: Request) {}
