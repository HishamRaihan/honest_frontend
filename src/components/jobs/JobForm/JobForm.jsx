import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import { SendCheck } from 'react-bootstrap-icons'
import './JobForm.scss'

const JobForm = ({ handleSubmit, title, company, description, budget, date, setTitle, setCompany, setDescription, setBudget, setDate }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='Title'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='company' className='mt-3'>
      <Form.Label>Company</Form.Label>
      <Form.Control
        placeholder='Company Name'
        name='company'
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='description' className='mt-3'>
      <Form.Label>Description</Form.Label>
      <Form.Control className= 'textarea'as="textarea" row={5}
        placeholder='Please describe the job'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='budget' className='mt-3'>
      <Form.Label>Budget</Form.Label>
      <Form.Control
        placeholder="What's the budget?"
        name='budget'
        value={budget}
        onChange={event => setBudget(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='date' className='mt-3'>
      <Form.Label>Date</Form.Label>
      <Form.Control
        placeholder="When's the start date?"
        name='date'
        type='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />
    </Form.Group>

    <Button className='mt-4 Bttn' variant='warning' type='submit'>Submit Job Form</Button>
    <div className='mt-3 footer' >We are pleased to be you partners</div>
  </Form>
)
export default JobForm
