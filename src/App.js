/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './global.scss'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import HomePage from './components/Home/HomePage'
import IndexJobs from './components/jobs/Index/IndexJobs'
import CreateJobs from './components/jobs/Create/CreateJob'
import OneJob from './components/jobs/Show/OneJob'
import AllUsers from './components/auth/IndexUsers'
import AllJobsForOneUser from './components/jobs/AllForOneUser/AllJobsForOneUser'
import EditJob from './components/jobs/Edit/EditJob'
import Footer from './components/Footer/Footer'
import video from '../src/components/assets/videos/nyc_night.mp4'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='page-container'>
        <div className='content-wrap'>
          <video autoPlay loop muted className='background-video'>
            <source src={video} type='video/mp4' />
          </video>
          <Routes>
            <Route
              exact path='/'
              element={
                <HomePage user={user} />
              }
            />
            <Route
              path='/sign-up'
              element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
            />
            <Route
              path='/sign-in'
              element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
            />
            <Route
              path='/sign-out'
              element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />}
            />
            <Route
              path='/change-password'
              element={<ChangePassword msgAlert={msgAlert} user={user} />}
            />

            <Route
              path='/users'
              element={<AllUsers msgAlert={msgAlert} user={user}/>}
            />

            <Route
              path='/jobs/create'
              element={<CreateJobs msgAlert={msgAlert} user={user} />}
            />
            <Route
              path='/jobs/owner'
              element={<AllJobsForOneUser msgAlert={msgAlert} user={user} />}
            />

            <Route
              path='/jobs/:id'
              element={<OneJob msgAlert={msgAlert} user={user} />}
            />
            <Route
              path='/jobs'
              element={<IndexJobs msgAlert={msgAlert} user={user} />}
            />

            <Route
              path='/jobs/:id/edit'
              element={<EditJob msgAlert={msgAlert} user={user} />}
            />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
