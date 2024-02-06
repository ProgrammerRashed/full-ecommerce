import React from 'react'
import ProductCard from '../shared/ProductCard'

const ProductsPage = ({data}:any) => {
  return (
    <div className='grid grid-cols-3 gap-5'>
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
