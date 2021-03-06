import React from 'react'
// import { Link } from 'react-router-dom'
// import CarouselPage from '../Carousel/Carousel'
import './Home.scss'
import video from '../assets/videos/nyc_night.mp4'
import squeege from '../assets/white_squeege.png'
// import { Button } from 'react-bootstrap'
// import squeege from '../assets/squeege.png'

const HomePage = (props) => {
  if (props.user) {
    return (
      <>
        <div className='home-contaier'>
          <video autoPlay loop muted className='background-video'>
            <source src={video} type='video/mp4'/>
          </video>
          {/* <span>Welcome, {props.user.username}</span> */}
          {/* <img className='background-image' src={squeege} /> */}
          {/* <h1>Welcome to Honest Installs</h1>
          <p className="desc">Let us fulfill your visual needs</p> */}
          <div className='home-title'>
            <h1>Welcome to Honest Installs</h1>
            <img src={squeege} className='squeege' alt="" />
            <p className="desc">A Squeege is all we need</p>
          </div>
        </div>
        {/* <CarouselPage /> */}
      </>
    )
  } else {
    return (

      <div className='home-contaier'>
        <video autoPlay loop muted className='background-video'>
          <source src={video} type='video/mp4' />
        </video>
        <div className='home-title'>
          <h1>Welcome to Honest Installs</h1>
          <img src={squeege} className='squeege' alt="" />
          <p className="desc">A Squeege is all we need</p>
        </div>
        {/*
        <div className='home-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
          GET STARTED
          </Button>
        </div> */}
      </div>
    )
  }
}

export default HomePage
