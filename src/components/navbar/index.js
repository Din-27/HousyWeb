import React from 'react'
import { Nav, Container, Navbar, Image, Form, FormControl, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import IconNav from '../../assets/Icon (1).png'

function NavbarGuest() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Image href="#" src={IconNav} />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
                <Button variant='light'><FaSearch/></Button>
            </Form>
            </Nav>
                <Nav.Link href="#" 
                disabled className='me-2'
                style={{fontWeight: 'bold', cursor: 'pointer'}}>
                    Sign in
                </Nav.Link>
                <Button variant="outline-dark" style={{fontWeight: 'bold'}}>Sign up</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarGuest