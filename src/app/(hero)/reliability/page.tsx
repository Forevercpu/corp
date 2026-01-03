import Hero from "@/components/hero"
import img from "/public/2.jpeg"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Reliability",
}
export default function Page() {
  return <Hero imgUrl={img} altTxt="" content="Reliability" />
}
