import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.scss'

const HomePage = (props) => {
  if (props.user) {
    return (
      <div className='HomeWrapper'>

        <h1>Make a Job Posting</h1>
      </div>
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
