import React from 'react'
import Image from 'next/image'

function ProductItemDetail({product}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-white text-black'>
      <Image
   src={
    product.images?.[0]?.url.startsWith("http")
      ? product.images[0].url
      : process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0].url
  }
      width={200}
      height={200}
      alt={product.name}
      className='bg-white p-5 h-[320px] w-[300px] object-contain'
      />
      <div className='flex flex-col gap-3'>
        <h2 className='text-3xl font-semibold'>{product.name}</h2>
        <h2 className='text-sm font-semibold text-gray-500'>{product.description}</h2>
        <div className='text-2xl'>&pound;{product.sellingPrice}</div>
      </div>
    </div>

  )
}

export default ProductItemDetail
