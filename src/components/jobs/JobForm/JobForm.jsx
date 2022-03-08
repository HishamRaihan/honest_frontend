import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import { SendCheck } from 'react-bootstrap-icons'

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

    <Form.Group controlId='company'>
      <Form.Label>Company</Form.Label>
      <Form.Control
        placeholder='Company Name'
        name='company'
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='description'>
      <Form.Label>Description</Form.Label>
      <Form.Control
        placeholder='Please describe the job'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='budget'>
      <Form.Label>Budget</Form.Label>
      <Form.Control
        placeholder="What's the budget?"
        name='budget'
        value={budget}
        onChange={event => setBudget(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='date'>
      <Form.Label>Date</Form.Label>
      <Form.Control
        placeholder="When's the start date?"
        name='date'
        type='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />
    </Form.Group>

    <Button className='mt-2 Bttn' variant='primary' type='submit'>Submit Job Form</Button>
    <div className='mt-5 footer' >We are pleased to be you partners</div>
  </Form>
)
export default JobForm
