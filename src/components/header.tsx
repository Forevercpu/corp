"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
const linkData = [
  {
    href: "/performance",
    label: "Performance",
  },
  {
    href: "/reliability",
    label: "Reliability",
  },
  {
    href: "/scale",
    label: "Scale",
  },
]

const accessLink = ["/", "/performance", "/reliability", "/scale"]
export default function Header() {
  const pathname = usePathname()
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto gap-2 text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-2xl space-x-4">
          {linkData.map((item) => (
            <Link
              key={item.href}
              className={pathname === item.href ? "text-purple-500" : ""}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
