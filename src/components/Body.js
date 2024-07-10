import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <MainContainer/>
        </div>
    </div>
  )
}

export default Body