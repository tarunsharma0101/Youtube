import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'


const Body = () => {

  return (
    <div className='flex'>
        <div className=''>
            <Sidebar/>
        </div>
        <div className=''>
            <MainContainer/>
        </div>
    </div>
  )
}

export default Body