import React from 'react'
import {Navbar,Container}from 'react-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar className='nav fixed-top navbar-expand-lg'>
    <Container className='d-flex justify-content-center'>
      <Navbar.Brand className='text-white me-5'>
      <h2>To-do App</h2>
      <p>What do you need to do?</p>
      </Navbar.Brand>
    </Container>
  </Navbar>

    
    
    </header>
  )
}

export default Header