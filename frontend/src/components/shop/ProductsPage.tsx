import React from 'react'
import ProductCard from '../shared/ProductCard'

const ProductsPage = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default ProductsPage
