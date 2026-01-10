import { NextResponse } from "next/server"
import db from "@/db"
interface IParams {
  params: {
    id: string
  }
}

// DELETE => /api/articles/:id
export async function DELETE(request: Request, { params }: IParams) {
  await db.update(({ posts }) => {
    const idx = posts.findIndex((item) => item.id === params.id)
    posts.splice(idx, 1)
  })
  return NextResponse.json({
    code: 0,
    message: "删除成功",
  })
}

// patch => /api/articles/:id
export async function PATCH(request: Request, { params }: IParams) {
  const data = await request.json()
  await db.update(({ posts }) => {
    const idx = posts.findIndex((item) => item.id === params.id)
    posts[idx] = { ...posts[idx], ...data }
  })

  return NextResponse.json({
    code: 0,
    message: "更新成功",
    data,
  })
}

// GET => /api/articles/:id
export async function GET(request: Request, { params }: IParams) {
  const data = db.data.posts.find((post) => post.id === params.id)
  return NextResponse.json({
    code: 0,
    message: "查找成功",
    data,
  })
}
