import React from "react"
import { products } from "@/data/photo"
import Image from "next/image"
export default function page({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === +params.id)!
  return (
    <div className="container mx-auto pt-8">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-lg block mx-auto"
      ></Image>

      <div className="border-2 border-dashed border-gray-500">
        <p>
          <strong>Title:{product.name}</strong>
        </p>
        <p>
          <strong>Price:{product.price}</strong>
        </p>
        <p>
          <strong>Description:{product.desc}</strong>
        </p>
      </div>
    </div>
  )
}

