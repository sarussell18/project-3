import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Navbar.css';


class NavBarjumbo extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Container fluid>
                        <Nav className="justify-content-end" activeKey="/">
                            <Nav.Item>
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/donate">Donate</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to ="/login">Login</Nav.Link>
                            </Nav.Item>
                        </Nav>
                 </Container>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavBarjumbo;