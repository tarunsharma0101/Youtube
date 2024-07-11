import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([])

  async function getVideos() {
      const data = await fetch(YOUTUBE_API);
      const response = await data.json()
      setVideos(response.items)
  }

  useEffect(() => {
    getVideos()
  },[])

  return (
    <div className='flex flex-wrap overflow-y-scroll h-[78vh] justify-center bg-black cursor-pointer '>
      {
        videos.map((video) => (
         <Link to={"/watch?v="+ video.id}> <VideoCard key={video?.id} info={video}/></Link>
        ))
      }
    </div>
  )
}

export default VideoContainer