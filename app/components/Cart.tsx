'use client'
import Image from 'next/image'
import { useCartStore } from '@/store'

export default function Cart() {
  const cartStore = useCartStore()

  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}