import React, { useEffect, useState } from 'react'
import { indexJobs } from '../../api/job'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { format } from 'timeago.js'
import './IndexJobs.scss'
const IndexJobs = ({ user, msgAlert }) => {
  const [jobs, setJobs] = useState([])

  if (!user) {
    return <Link to='/' />
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
    <div className='jobs' key={job._id}>
      <h5>{job.company}</h5>
      <Link classname='test' to={`/jobs/${job._id}`}>{job.title}</Link>
      <span className='jobDate'>{format(job.createdAt)}</span>
      <h6>{job.description}</h6>
      <h6>Budget: $ {job.budget} USD</h6>
      <h6>Date to Start:{job.date}</h6>
      <h6>{job.owner.username} Job Posting</h6>
    </div>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Posts</h3>
        <ul>{jobList}</ul>
      </div>
    </div>
  )
}
//     <div className='index' id='idex'>
//       <h1>Job Board</h1>
//       <div className='container'>
//         {jobs.map((job) => (
//           <div className='jobs' key={job._id}>
//             <div className="top">
//               <div className="left">
//                 <h5>{job.title}</h5>
//                 <h6>{job.user.username} Job Posting</h6>
//                 <div className='right'></div>
//               </div>
//               <div className="center">
//                 {job.description}
//                 {job.budget}
//               </div>
//               <div className="bottom">
//                 <h3>{job.company}</h3>
//                 <span>{job.date}</span>
//                 <span className='jobDate'>{format(job.createdAt)}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export default IndexJobs
