import React from 'react'
import Button from './Button'


const list = ["All", "Live", "Sports", "Gaming", "Movies", "Kevin Hart", "Game Show", "Music", "Smartphones", "Standup", "Prayer", "Tom"]

const ButtonList = () => {

  return (

    <div className='flex justify-center bg-black  '>
      {
        list.map((item,index) => (
          <Button key={index} name={item} />
        ))
      }
    </div>

  )
}

export default ButtonList