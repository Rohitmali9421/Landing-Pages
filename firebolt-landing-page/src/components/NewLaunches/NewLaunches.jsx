import React from 'react'

import CardScrollLayout from '../CardScrollLayout';
import Card from '../Card';
function NewLaunches() {
  
  return (
    <div className='w-full pt-10'>
      <div className='flex w-full justify-center'>
        <h1 className='font-bold text-2xl md:text-4xl '>New</h1>
        <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Launches</h1>
      </div>
      <div className='mx-auto border border-black mt-2 rounded-full bg-gray-500 w-40 '></div>
      <div className=' w-full flex justify-center gap-3  mt-3'>
        <h1 className='md:text-xl text-sm pb-1 '>Recently Launched</h1>
        <h1 className='md:text-xl text-sm  pb-1   text-gray-600'>Upcoming Launches</h1>
      </div>
      
        <CardScrollLayout>
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722356115/Firebolt-landing-page/d4yzqrwhctf98rot114a.webp" name="Arc" description="AMOLED | BT Calling" price="₹1,699" />
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722356219/Firebolt-landing-page/oxecj1com5az0g2cpwuq.webp" name="Maverick" description="51.3mm Display | BT Calling" price="₹2,799" />
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722356313/Firebolt-landing-page/tdyzhggq3zayjwdao73t.webp" name="Dapper" description="BT Calling" price="₹1,999" />
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722356539/Firebolt-landing-page/gdqcjhitpu1wvlwiangi.webp" name="Brillia  " description="51.3mm AMOLED | BT Calling " price="₹1,699" />
        
        </CardScrollLayout>
        
     
    </div>
  )
}

export default NewLaunches
