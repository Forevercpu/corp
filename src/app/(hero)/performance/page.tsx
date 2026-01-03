import Hero from "@/components/hero"
import img from "/public/1.jpeg"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Performance",
}
export default function Page() {
  return <Hero imgUrl={img} altTxt="" content="Professional Cloud Hosting" />
}
