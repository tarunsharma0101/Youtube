import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { FaPodcast } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if(!isMenuOpen) return null;

  return (
    <div className='text-white bg-black font-thin text-xl h-[87vh] hover:overflow-scroll overflow-hidden hover:overflow-x-hidden'>

        <div className=' hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2 mb-4 gap-4'> <AiFillHome className='flex items-center '/>HOME</h1>
        
        </div>
        
        <div className=' hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <SiYoutubeshorts className='flex items-center'/>SHORTS</h1>
        
        </div>

        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <MdSubscriptions className='flex items-center'/>SUBSCRIPTION</h1>
        
        </div>

        <div className= 'h-[1px] bg-white '></div>

        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <GrChannel className='flex items-center'/>Your Channel</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <FaHistory  className='flex items-center'/>History</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <RiPlayList2Fill className='flex items-center'/>Playlist</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <BiSolidVideos className='flex items-center'/>Your Videos</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <MdWatchLater className='flex items-center'/>Watch Later</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <AiFillLike className='flex items-center'/>Liked Videos</h1>
        
        </div>

        <div className= 'h-[1px] bg-white  '></div>

        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <IoMdTrendingUp className='flex items-center'/>Trending</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <FaShoppingBag className='flex items-center'/>Shopping</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <FaMusic className='flex items-center'/>Music</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <MdLocalMovies className='flex items-center'/>Movies</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <RiLiveFill className='flex items-center'/>Live</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <IoGameController className='flex items-center'/>Gaming</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <FaRegNewspaper className='flex items-center'/>News</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <MdOutlineSportsVolleyball className='flex items-center'/>Sports</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <FaBookOpen className='flex items-center'/>Courses</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <FiShoppingBag className='flex items-center'/>Fashion & Beauty</h1>
        
        </div>
        <div className='   hover:-translate-y-1 transition-all delay-100 cursor-pointer'>

            <h1 className='flex items-center ml-2  gap-4 my-4'> <FaPodcast  className='flex items-center'/>Podcasts</h1>
        
        </div>
    </div>
  )
}

export default Sidebar