import React, { useEffect, useState } from 'react'
import { indexUsersJobs } from '../../../api/job'
import { Link, Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { format } from 'timeago.js'
import '../Index/IndexJobs.scss'
import JobDate from '../Date/JobDate'
const AllJobsForOneUser = ({ user, msgAlert }) => {
  const [usersJobs, setUsersJobs] = useState([])

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const res = await indexUsersJobs(user)
        setUsersJobs(res.data.jobs)
      } catch (error) {
        // Alert the user, that they failed to sign up
        msgAlert({
          heading: 'Jobs Cant be displayed: ' + error.message,
          message: 'Cant index Job',
          // this will be red
          variant: 'danger'
        })
      }
    }
    getAllJobs()
  }, [])

  if (!usersJobs.length) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }
  const jobList = usersJobs.map(job => (
    <div className='jobs' key={job._id}>
      <h5>
        <Link to={`/jobs/${job._id}`}>{job.company}</Link>
      </h5>
      <h5>{job.title}</h5>
      <span className='jobDate'>{format(job.createdAt)}</span>
      <h6>{job.description}</h6>
      <h6>Budget: $ {job.budget} USD</h6>
      <JobDate date={job.date} />
      {/* <h6>{job.owner.username} Job Posting</h6> */}
    </div>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Your Job Board</h3>
        <ul>{jobList}</ul>
      </div>
    </div>
  )
}

export default AllJobsForOneUser
