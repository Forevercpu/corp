import React, { type FC } from "react"
import { Metadata } from "next"
import BlogList from "@/components/blogList"

// either Static metadata
export const metadata: Metadata = {
  title: "博客列表",
}

const page: FC = () => {
  return <BlogList />
}

export default page
