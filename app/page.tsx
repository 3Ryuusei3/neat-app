import Stripe from 'stripe'
import { metadata } from './layout';
import Product from './components/Product';

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16'
  })

  const products = await stripe.products.list()
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({
        product: product.id,
      })
      const fabric = product.metadata.fabric || ""
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        metadata: { fabric },
      }
    }
  ))
  return productWithPrices
}

export default async function Home() {
  const products = await getProducts()
  console.log(products)
  return (
    <main className='grid grid-cols-fluid gap-2'>
      {products.map(product => (
        <Product {...product} unit_amount={product.unit_amount || 0} key={product.id}/>
      ))}
    </main>
  )
}
