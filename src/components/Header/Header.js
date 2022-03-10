import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'
import squeege from '../assets/squeege.png'
// import { AiOutlineSetting } from 'react-icons/ai'
import { FcHome } from 'react-icons/fc'
import './Header.scss'

const authenticatedOptions = (
  <>
    <NavLink to='/jobs/owner' className='nav-link '> Your Jobs </NavLink>
    <NavLink to='/jobs/create' className='nav-link '>Create Job</NavLink>
    <NavLink to='/users/' className='nav-link makePost'>List of Users </NavLink>
    <NavLink to='/jobs' className='nav-link '>All Jobs</NavLink>
    {/* <FcEngineering />
    <AiOutlineSetting className='settings' /> */}
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>

  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link'>Register</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link'> <FcHome title='Home'/></NavLink>
  </>
)

const Header = ({ user }) => (
  // into the navbar style={{ height: '50px' }}
  <Navbar className='nav' variant='dark' expand='md' >
    <Container >
      <Navbar.Brand>
        {/* <img src={squeege} width='60px' height='60px' variant='light'/> */}
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
          <img src={squeege} width='50px' height='50 px'/></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto' collapseOnSelect>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.username}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
