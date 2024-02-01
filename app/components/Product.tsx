import Image from "next/image"

export default function Product({name, image, price}: {name: string, image: string, price: number}) {
  return (
    <div>
      <Image src={image} alt={name} width={200} height={200} />
      <h1>{name}</h1>
      {price}
    </div>
  )
}