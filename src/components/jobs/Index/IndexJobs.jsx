import React, { useEffect, useState } from 'react'
import { indexJobs } from '../../../api/job'
import { Link, Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { format } from 'timeago.js'
import './IndexJobs.scss'
import JobDate from '../Date/JobDate'
const IndexJobs = ({ user, msgAlert }) => {
  const [jobs, setJobs] = useState([])

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await indexJobs(user)
        setJobs(response.data.jobs)
      } catch (error) {
        // Alert the user, that they failed to sign up
        msgAlert({
          heading: 'Job Post cannot be displayed: ' + error.message,
          message: 'Cannot index JobPost',
          // this will be red
          variant: 'danger'
        })
      }
    }
    getJobs()
  }, [])

  if (jobs.length === 0) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }
  const jobList = jobs.map(job => (
    <div className={job.featured ? 'card fetured' : 'card'} key={job._id}>
      <div className="top">
        <img className='left' alt="" />
        <img className='user' alt="" />
        <img className='right' alt="" />
      </div>
      <div className="center">
        {job.description}
      </div>
      <div className="bottom">
        <h3>{job.owner.username}</h3>
        <h4>{}</h4>
      </div>
      <h5>
        <Link to={`/jobs/${job._id}`}>{job.company}</Link>
      </h5>
      <h5>{job.title}</h5>
      <span className='jobDate'>{format(job.createdAt)}</span>
      <h6>{job.description}</h6>
      <h6>Budget: $ {job.budget} USD</h6>
      <JobDate date={job.date} />
      <h6>{job.owner.username} Job Posting</h6>
    </div>
  ))

  return (
    <div className='jobs' id='jobs'>
      <h1>Job Board</h1>
      <div className='container'>
        {jobList}
      </div>
    </div>

  )
}

export default IndexJobs
