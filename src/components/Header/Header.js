import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../utilitig/CustomLInk';
import './Header.css'

const Header = () => {
    return (
        <div style={{ fontSize: "20px"}}>
            <Navbar className='w-100' bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='text-light' >Book store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link className='me-4'><CustomLink to="/">Home</CustomLink></Nav.Link>
                            <Nav.Link className='me-4'><CustomLink to="/reviews">Reviews</CustomLink></Nav.Link>
                            <Nav.Link className='me-4'><CustomLink to="/dashboard">Dashbord</CustomLink></Nav.Link>
                            <Nav.Link className='me-4'><CustomLink to="/blogs">Blogs</CustomLink></Nav.Link>
                            <Nav.Link className='me-4'> <CustomLink to="/about">About</CustomLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;