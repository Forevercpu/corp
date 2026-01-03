import Image, { StaticImageData } from "next/image"
import { FC } from "react"


interface IProps {
  imgUrl: StaticImageData
  altTxt: string
  content: string
}
const Hero: FC<IProps> = (props) => {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgUrl}
          alt={props.altTxt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl font-bold">{props.content}</h1>
      </div>
    </div>
  )
}

export default Hero
