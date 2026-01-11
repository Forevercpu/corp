import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { username, password } = await request.json()
  // 调用后端接口
  const r = await fetch(
    "https://m1.apifoxmock.com/m1/7688642-7431172-default/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  )
  const data = await r.json()
  console.log("🚀 ~ POST ~ data:", data)
  /**
   * 这里相当于在做BFF
   */
  // return NextResponse.json(
  //   {
  //     success: true,
  //   },
  //   {
  //     headers: {
  //       "Set-Cookie": `token=${data.token}; path=/;Max-Age=86400;HttpOnly`,
  //     },
  //   }
  // )

  const response = NextResponse.json({
    success: true,
    message: "登录成功",
  })
  response.cookies.set("token", data.token, {
    path: "/",
    maxAge: 86400,
    httpOnly: true,
  })
  return response
}
