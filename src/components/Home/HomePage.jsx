import React from 'react'
import { Link } from 'react-router-dom'
import CarouselPage from '../Carousel/Carousel'
import '../Home/Home.scss'

const HomePage = (props) => {
  if (props.user) {
    return (
      <>
        <div className='HomeWrapper'>
          <h1>Welcome, {props.user.username}</h1>
        </div>
        <CarouselPage />
      </>
    )
  } else {
    return (
      <div className='HomePage'>
        <h1>Hello Im Home</h1>
        <p>Please Sign Up</p>
        <Link to='/sign-up'>
          <button>Sign up</button>
        </Link>
        <Link to='/sign-in'>
          <button>Sign in</button>
        </Link>
      </div>
    )
  }
}

export default HomePage
