import { data } from "@/data"
import { Card } from "antd"
import { Metadata } from "next"
import React, { type FC } from "react"
type Props = {
  params: { id: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `博客详情 - ${params.id}`,
  }
}
const page = ({ params }: { params: { id: string } }) => {
  const item = data.find((item) => item.id === +params.id)
  if (!item) {
    return (
      <div>
        <h1>404 Not Found</h1>
      </div>
    )
  } else {
    return (
      <Card
        title="Default size card"
        extra={<a href="/blog">Back</a>}
        style={{ width: 300 }}
      >
        <p>{item.name}</p>
        <p>{item.age}</p>
        <p>{item.sex}</p>
      </Card>
    )
  }
}

export default page
