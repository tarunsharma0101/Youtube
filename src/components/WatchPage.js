import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'


const WatchPage = () => {


  const [params] = useSearchParams()
  console.log(params.get("v"));

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
  },[])

  return (
    <div className='bg-black'>
      <div className='px-4 py-1'>
        <iframe className='rounded-xl' width="1000" height="530" src={"https://www.youtube.com/embed/" + params.get("v")} title="EPL Season 3 | Round2Hell | R2H" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default WatchPage