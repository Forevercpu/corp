import Hero from "@/components/hero"
import img from "/public/3.jpeg"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Scale",
}
export default function Page() {
  return <Hero imgUrl={img} altTxt="" content="Scale" />
}
