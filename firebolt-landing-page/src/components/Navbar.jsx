import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBarsStaggered } from "react-icons/fa6";
function Navbar() {

  return (
    <div className='w-full h-16 flex border justify-between items-center px-4 md:px-10 lg:px-20'>
      <FaBarsStaggered className='block sm:hidden text-2xl' />
      <div className=' gap-4 items-center h-full sm:flex hidden'>
        <h1 className='text-lg font-bold'>Products</h1>
        <h1 className='text-lg font-bold'>Deals</h1>
        <h1>More</h1>
      </div>
      <div className=''>
        <img src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355023/Firebolt-landing-page/wchrtlxhayyrfhbt1lra.webp" loading="lazy" alt="" />
      </div>
      <div className='flex gap-4 text-2xl'>
        <IoIosSearch />
        <IoBagHandleOutline />
        <CiUser />
      </div>
    </div>
  )
}

export default Navbar
