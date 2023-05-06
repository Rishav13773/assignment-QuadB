import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigate = () => {
    return (
        <div>
            <Navbar className='navbar'>
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>TvMaze</Navbar.Brand>
                    <Navbar.Toggle />
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigate