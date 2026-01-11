"use client"
import React from "react"
import { Form, Input, Button, Card } from "antd"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  // 表单初始值
  const formInitialValues = {
    remember: true,
    username: "admin",
    password: "123456",
  }
  const router = useRouter()
  // 登录处理函数
  const handleLogin = async (values: any) => {
    console.log("用户登录信息:", values)
    // 这里可以添加实际的登录逻辑
    const r = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    const data = await r.json()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">登录</h1>
          <p className="text-gray-600">欢迎回来，请登录您的账户</p>
        </div>

        <Form
          name="login"
          initialValues={formInitialValues}
          onFinish={handleLogin}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名！" }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>

          <Form.Item className="mb-4">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-10 text-base"
            >
              登录
            </Button>
          </Form.Item>

          <div className="text-center text-sm">
            <a href="#" className="text-blue-600 hover:underline mr-4">
              忘记密码？
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              注册新账户
            </a>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
