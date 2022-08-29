import React, { useEffect, useState } from 'react'
import ProductData from '../api/products.json'
import Product from './ui/Product'

export default function () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(ProductData)
  }, [])


  return (
    <div >
      <h3 className='text-sm font-semibold mb-2'>Favoriler</h3>
      <div className='grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden'>
        {products.length && products.map((product, index) => <Product key={index} product={product} />)}
      </div>
      
    </div>
  )
}
