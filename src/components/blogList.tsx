"use client"
import React from 'react' 
import { data } from "@/data"
import Link from "next/link"
import { List, Avatar } from "antd"  
export default function BlogList() {
  return (
     <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<Link href={`/blog/${item.id}`}>{item.name}</Link>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  )
}