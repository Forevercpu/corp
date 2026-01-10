import React, { type FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/photo"

const page: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/photos/${product.id}`} className="block">
            <div className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-lg mb-3"
              />
              <h3 className="text-center font-medium mb-1">{product.name}</h3>
              <p className="text-center text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page
