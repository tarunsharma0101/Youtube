import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { Link, useSearchParams } from 'react-router-dom'
import { VIDEO_API, YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import CommentsContainer from './CommentsContainer'


const WatchPage = () => {


  const [params] = useSearchParams()
  const [videoData, setVideoData] = useState([])
  const [videos, setVideos] = useState([])

  const getVideoData = async () => {
    const video = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + params.get("v") +"&key=AIzaSyCWe89o0B9B5DVfBYHx4v5A5XKMHL72JbQ")

    const data = await video.json()
    setVideoData(data.items[0].snippet)
  }

    async function getVideos() {
        const data = await fetch(YOUTUBE_API);
        const response = await data.json()
        setVideos(response.items)
  }

  const getParams = () => {
    return (params.get("v"));
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
    getVideoData()
    getVideos()
  },[])

  return (
    <div>
    <div className='flex gap-10'>

      <div className='bg-black'>
        <div className='px-4 '>
          <iframe className='rounded-xl' width="1000" height="530" src={"https://www.youtube.com/embed/" + params.get("v")} title="EPL Season 3 | Round2Hell | R2H" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className='text-white  px-8 py-4 '>
          <h1 className='font-bold text-xl'>{videoData?.localized?.title}</h1>
          <div>
            <h1 className='font-medium '>{videoData?.channelTitle}</h1>
          </div>
        </div>

      </div>

      <div className='overflow-y-scroll h-[87vh] justify-center w-[30vw] bg-black cursor-pointer ' onClick={getParams}>
      {
        videos.map((video) => (
         <Link to={"/watch?v="+ video.id}> <VideoCard key={video?.id} info={video}/></Link>
        ))
      }
    </div>
    </div>

    <div className='text-white'>
      <CommentsContainer/>
    </div>
    </div>
  )
}

export default WatchPage