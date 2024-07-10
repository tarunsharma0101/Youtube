import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2 } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";


const Head = () => {
  return (
    <div className='text-white flex justify-between bg-black'>

        <div className='flex  flex-row gap-10 ml-10'>
            <div className='flex items-center '>
               <GiHamburgerMenu className='text-4xl cursor-pointer'/>
            </div>
            <ImYoutube2 className="text-[100px]  cursor-pointer "/>
        </div>

        <div className=' flex items-center p-3 w-5/12'>
            <input 
                className='w-full p-2 rounded-xl border border-black text-md text-slate-900'
                type='text'
                placeholder='Search' />
                <div className=' cursor-pointer  '>
                    <ImSearch className='text-[45px] p-2 m-1 hover:animate-pulse '/>
                </div>
        </div>

        <div className='flex items-center gap-8 mr-10'>
             <IoMdNotifications className='text-3xl'/> 
             <FaUserCircle className='text-4xl'/>
        </div>
    </div>
  ) 
}

export default Head