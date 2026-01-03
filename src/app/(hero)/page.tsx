import Image from "next/image"
import { FC } from "react"
import img from "/public/0.jpg"
import Hero from "@/components/hero"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Home",
}
const Page: FC = () => {
  return (
    <Hero
      imgUrl={img}
      altTxt=""
      content="Welcome to our website"
    />
  )
}

export default Page
