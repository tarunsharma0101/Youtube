import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-zinc-800 px-5 py-2 m-2 rounded-lg text-white'>
        <button>{name}</button>
    </div>
  )
}

export default Button
