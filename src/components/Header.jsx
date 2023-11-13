import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logicon from "../assets/steam.png";
import Logo from "../assets/Logo (5).png";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
       <Container>
        <Row>
            <Col lg={12} md={12} sm={12}>
            <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#link">LEADERBOARD</Nav.Link>
                    <Nav.Link href="#link">ABOUT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <div className='login-button'>
                    <button>
                        <img src={logicon}/>
                        <a href=''>Login</a>
                    </button>
                </div>
            </Container>
            </Navbar>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Header