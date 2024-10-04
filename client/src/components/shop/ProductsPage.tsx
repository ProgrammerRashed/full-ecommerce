import React from 'react'
import ProductCard from '../shared/ProductCard'

const ProductsPage = ({data}:any) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        data.map((product:any, index:any)=>(
          <div key={index}>

            <ProductCard product={product}/>
          </div>
        ))
      }
   
    </div>
  )
}

export default ProductsPage
