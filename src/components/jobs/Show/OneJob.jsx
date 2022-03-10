import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'
import { deleteJob, showJob } from '../../../api/job'
import { format } from 'timeago.js'
import './OneJob.scss'
import JobDate from '../Date/JobDate'

const OneJob = ({ user, msgAlert }) => {
  const [job, setJob] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showJob(id, user)
        setJob(res.data.job)
        console.log(user)
      } catch (error) {
        msgAlert({
          heading: 'Job failed to load this is coming from (Job.js Error)',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteJob(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete Job',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If movie is `null`, we are loading
  if (!job) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/jobs' />
  } else {
    // We have a job, display it!
    return (
      <div className="centerDiv">
        <div className='job'>
          <div className='JobWrapper'>
            <h3>{job.company}
            </h3>
            <p>Job Description: {job.description}</p>
            <h6>Budget of: $ {job.budget}</h6>
            <span>
            Start Date:
              <JobDate date={job.date}/>
            </span>
            <span className='jobDate'>{format(job.createdAt)}</span>
            <h6></h6>
            <Link to={`/jobs/${id}/edit`}>
              <Button className='Bttn m-5' variant='primary' type='submit'>Update Job </Button>
            </Link>
            <Button className='Bttn' variant='danger' onClick={handleDeleteClick}>Delete Job </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default OneJob
