import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css';


class NavBarjumbo extends Component {
    render() {
        console.log(this.props)
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Container fluid>
                        <Nav className="justify-content-end" activeKey="/">
                            <Nav.Item>
<<<<<<< HEAD
                                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link ><Link to='/donate'>Donate</Link></Nav.Link>
=======
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/donate">Donate</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link to ="/login">Login</Nav.Link>
>>>>>>> master
                            </Nav.Item>
                            {/* <Nav.Item> */}
                                {!this.props.user ?(
                                <React.Fragment>
                                    <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                                    <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                                </React.Fragment>

                                )
                                : <Nav.Link>{`Welcome ${this.props.user}`}</Nav.Link>}
                            {/* </Nav.Item> */}

                                {this.props.user  &&
                                <Nav.Link> <span onClick={this.props.logout}>Log Out</span> </Nav.Link>
                                }

                        </Nav>
                 </Container>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavBarjumbo;