"use client"
import Link from "next/link"
import { useState } from "react"

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mt-10">
      <h2>Dashboard Template {count}</h2>
      <button
        className="bg-black text-white px-4 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      {children}
    </div>
  )
}
