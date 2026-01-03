"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const linkData = [
  {
    name: "About",
    href: "/dashboard/about",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {linkData.map((item) => (
          <Link
            key={item.href}
            className={pathname === item.href ? "text-purple-500" : ""}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
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
