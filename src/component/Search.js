import React from 'react'
import { Container,Navbar } from 'react-bootstrap'


const Search = ({filterSearch}) => {

  return (
    <Navbar className='search' >
    <Container className='d-flex justify-content-center'>
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback"></span>
      <input
        type="text"
        className="form-control"
        placeholder="Filter to-do"
        onChange={(e)=>filterSearch(e.target.value)}
        name="search"
      />
    </div>
    </Container>
  </Navbar>
   
   
    
  )
}

export default Search