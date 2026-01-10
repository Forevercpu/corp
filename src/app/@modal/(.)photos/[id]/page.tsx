"use client"

import React from "react"
import { products } from "@/data/photo"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Page({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === +params.id)!
  const router = useRouter()

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]"
      onClick={() => router.back()}
    >
      <Image
        onClick={(e) => e.stopPropagation()}
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-lg"
      />
    </div>
  )
}
