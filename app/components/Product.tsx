import Image from "next/image"
import formatPrice from "@/utils/PriceFormat"
import { ProductType } from "@/types/ProductType"

export default function Product({name, image, price}: ProductType) {
  return (
    <div>
      <Image src={image} alt={name} width={200} height={200} />
      <h1>{name}</h1>
      {formatPrice(price as number)}
    </div>
  )
}