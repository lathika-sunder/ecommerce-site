import React from 'react'
import './HomePage.css'
import AutoplayCarousel from '../../components/Carousel/AutoPlayCarousel'
const HomePage = () => {
  return (
    <div>
      <AutoplayCarousel/>
      <div className="main-content">
        <div className="border-box">
          <h1>Welcome to our website!</h1>
        </div>
       
      </div>
    </div>
  )
}

export default HomePage