import React from 'react'
// import './TaskDate.css'
import '../Date/JobDate.scss'

const JobDate = (props) => {
  const newDate = new Date(props.date)
  const month = newDate.toLocaleString('en-US', { month: 'long' })
  const year = newDate.getFullYear()
  const day = newDate.toLocaleString('en-US', { day: '2-digit' })
  return (
    <div className='task-date'>
      <div className='job-date__month'>{month}</div>
      <div className='job-date__year'>{year}</div>
      <div className='job-date__day'>{day}</div>
    </div>
  )
}

export default JobDate
