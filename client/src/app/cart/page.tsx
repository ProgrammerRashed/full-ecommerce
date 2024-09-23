import ContinueShoppingCard from '@/components/cart/ContinueShoppingCard'
import ShoppingCart from '@/components/cart/ShoppingCart'
import React from 'react'

const CartPage = () => {
  return (
    <div className='max-w-[1440px] mx-auto py-10 px-2 md:px-3 lg:px-5'>
      <ShoppingCart/>
      <ContinueShoppingCard></ContinueShoppingCard>
    </div>
  )
}

export default CartPage