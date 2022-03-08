import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { createJob } from '../../../api/job'
import JobForm from '../JobForm/JobForm.jsx'

const CreateJobs = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [description, setDescription] = useState('')
  const [budget, setBudget] = useState('')
  const [date, setDate] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createJob(title, company, description, budget, date, user)
      setCreatedId(res.data.job._id)

      msgAlert({
        heading: 'Job Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to create job post',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if movie has been created,Navigate to the 'show' page
    return <Navigate to={`/jobs/${createdId}`} />
  }
  return (
    <div className='row'>
      <div className='col-md-3 mx-auto mt-5'>
        <h3>Create Job Post</h3>
        <JobForm
          handleSubmit={handleSubmit}
          company={company}
          title={title}
          description={description}
          budget={+budget}
          date={date}
          setCompany={setCompany}
          setTitle={setTitle}
          setDescription={setDescription}
          setBudget={setBudget}
          setDate={setDate}
        />
      </div>
    </div>
  )
}

export default CreateJobs
