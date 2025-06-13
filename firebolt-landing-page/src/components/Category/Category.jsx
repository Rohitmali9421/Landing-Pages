import React from 'react'

function Category() {
  return (
    <div className='w-full pt-10 pb-6'>
      <div className='flex w-full justify-center'>
        <h1 className='font-bold text-2xl md:text-4xl '>Shop By  </h1>
        <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Categories</h1>
      </div>
      <div className='grid w-full px-3  md:gap-3 gap-1 grid-cols-3 md:grid-cols-4 mt-8'>
        <div className='col-span-3  md:col-span-2'>
          <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357518/Firebolt-landing-page/nhnkloc5fkdgf16nzhsx.webp" className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className='  '>
          <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357609/Firebolt-landing-page/xc2rfykpqewxmyl6vbmf.webp" className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className='  row-span-2'>
          <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357657/Firebolt-landing-page/imcnxpqhwhlfncafdncg.webp" className=' object-cover h-full ' loading="lazy" alt="" />
        </div>
        <div className=' '>
          <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357710/Firebolt-landing-page/bnauhs4urqk8fknow3s7.webp" className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className=' '>
          <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357781/Firebolt-landing-page/gzavetswypjseaa8qsxf.webp" className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className=' '>
          <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357820/Firebolt-landing-page/gmc1oqgslp01zdusq2a1.webp" className=' object-cover h-full' loading="lazy" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category
