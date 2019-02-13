import React from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import './Navbar.css';
const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" >
				<Container fluid>
					<Nav className="justify-content-end" activeKey="/">
						<Nav.Item>
							<Nav.Link to ="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link to ="/donate">Donate</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link to ="">Login</Nav.Link>
						</Nav.Item>
					</Nav>
				</Container>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar;