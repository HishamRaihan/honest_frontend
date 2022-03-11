import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'
import squeege from '../assets/squeege.png'
// import { AiOutlineSetting } from 'react-icons/ai'
import { FcHome, FcList, FcLibrary } from 'react-icons/fc'
import { AiOutlineLogout } from 'react-icons/ai'
import { MdOutlineChangeCircle, MdOutlineCoffeeMaker, MdLogin } from 'react-icons/md'
import { CgUserList } from 'react-icons/cg'
import { FaCashRegister } from 'react-icons/fa'
// import { FaAngellist } from 'react-icons/fa';
import './Header.scss'

const authenticatedOptions = (
  <>
    <NavLink to='/jobs/owner' className='nav-link '> <FcLibrary title='Users Jobs'/> </NavLink>
    <NavLink to='/jobs/create' className='nav-link '><MdOutlineCoffeeMaker title='Make a job'/></NavLink>
    <NavLink to='/users/' className='nav-link '><CgUserList title='All Users'/> </NavLink>
    <NavLink to='/jobs' className='nav-link '><FcList title='All jobs list'/></NavLink>
    {/* <FcEngineering />
    <AiOutlineSetting className='settings' /> */}
    <NavLink to='/change-password' className='nav-link'><MdOutlineChangeCircle title='Change Password'/></NavLink>
    <NavLink to='/sign-out' className='nav-link'><AiOutlineLogout title='Sign Out'/></NavLink>

  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link'><FaCashRegister title='Register'/></NavLink>
    <NavLink to='/sign-in' className='nav-link'><MdLogin title='Login'/></NavLink>
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
            <h5 className='navbar-text me-5'>Welcome, {user.username}</h5>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
