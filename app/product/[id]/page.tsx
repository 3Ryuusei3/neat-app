import { SearchParamTypes } from "@/types/SearchParamsTypes"
import Image from "next/image"
import formatPrice from "@/utils/PriceFormat"

export default async function Product ({searchParams} : SearchParamTypes) {
  return (
    <div className="flex justify-between gap-10 py-12 text-gray-700">
      <Image src={searchParams.image} alt={searchParams.name} width={500} height={500} />
      <div className="text-right font-medium text-700">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
        <p className="py-2">{searchParams.fabric}</p>
        <div>
          <p className="font-bold text-teal-700 mt-6">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
        </div>
      <button className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700">Add to card</button>
      </div>
    </div>
  )
}