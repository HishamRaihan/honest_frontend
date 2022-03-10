import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import { showJob, updateJob } from '../../../api/job'
import JobForm from '../JobForm/JobForm'

const EditJob = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [description, setDescription] = useState('')
  const [budget, setBudget] = useState('')
  const [date, setDate] = useState('')
  const [updated, setUpdated] = useState(false)
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
        setTitle(res.data.job.title)
        setCompany(res.data.job.company)
        setDescription(res.data.job.description)
        setBudget(res.data.job.budget)
        setDate(res.data.job.date)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load post',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateJob(id, title, company, description, budget, date, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update post',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  if (updated) {
    // Navigate to the 'show' page
    return <Navigate to={`/jobs/${id}`} />
  }

  return (
    <div className='row mt-5'>
      <div className='form col-md-3 mx-auto mt-5'>
        <h3>Edit Job Post</h3>
        <JobForm
          handleSubmit={handleSubmit}
          title={title}
          company={company}
          description={description}
          budget={+budget}
          date={date}
          setTitle={setTitle}
          setCompany={setCompany}
          setDescription={setDescription}
          setBudget={setBudget}
          setDate={setDate}
        />
      </div>
    </div>
  )
}

export default EditJob
