import React, { useEffect, useState } from 'react'
import { indexUser } from '../../api/auth'
import { Link, Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { format } from 'timeago.js'
import './IndexUsers.scss'

const AllUsers = ({ user, msgAlert }) => {
  const [allUsers, setAllUsers] = useState([])

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await indexUser(user)
        setAllUsers(response.data.users)
      } catch (error) {
        // Alert the user, that they failed to sign up
        msgAlert({
          heading: 'Users Cant be displayed: ' + error.message,
          message: 'Cant index Users',
          // this will be red
          variant: 'danger'
        })
      }
    }
    getUsers()
  }, [])

  if (allUsers.length === 0) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }
  const userList = allUsers.map(user => (
    <div className={user.featured ? 'card fetured' : 'card'} key={user._id}>
      <Link to={`/jobs/${user._id}`}></Link>
      <div className='bottom'>
        <h5>{user.username}</h5>
        {/* <h4>{user.company}</h4> */}

      </div>
      <span className='jobDate'>Joined: {format(user.createdAt)}</span>

    </div>
  ))

  return (
    <div className='row mt-5'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>All Users On Honest Installs Job board</h1>
        <div className='users mt-5'>
          {userList}
        </div>
      </div>
    </div>
  )
}

export default AllUsers
