import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Product({ product }) {
  return (
    <div className='bg-white gap-y-1 relative block flex flex-col items-center text-center p-3 '>
      <picture >
        <button>
          <AiOutlinePlus className=' absolute top-3 right-3 w-5 h-5 bg-white flex items-center justify-center border border-gray-200 rounded-lg twxt-white shadow-md hover:bg-brand-color hover:text-brand-yellow hover:border-brand-color' />
        </button>
      </picture>

      <img className='w-full' src={product.image} alt={product.title} />
      <div className='text-sm font-semibold text-brand-color'>{product.price}</div>
      <div className='text-sm font-semibold text-gray-900'>{product.title}</div>
      <div className='text-sm font-semibold text-gray-500'>{product.alt}</div>
    </div>
  )
}
