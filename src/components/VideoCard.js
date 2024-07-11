import React from 'react'

const VideoCard = ({info}) => {


    const {snippet , statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (

    <div className='p-2 m-1 w-80 text-white'>
        <div>
            <img className='rounded-lg' src={thumbnails?.medium?.url} alt={title}/>
        </div>
        <div className='mt-1'>
            <h1 className='font-bold'>{title}</h1>
            <h2 className='font-semibold'>{channelTitle}</h2>
            <p className='font-semibold'>{statistics?.viewCount} views</p>
        </div>
    </div>
  )
}

export default VideoCard