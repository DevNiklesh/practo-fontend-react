import React, { Component } from 'react'
import {Navbar,Container,Nav,Image,Col,Button} from "react-bootstrap"
import logo from '../images/Practo-logo.png'
export default class NavBar extends Component {
    render() {
        return (
            <Navbar style={{"background-color":"white","border":"1px solid #dde2de"}}>
                <Container>
                    <Navbar.Brand href="/">
                        <Col>
                            <Image src={logo} className = "logo-image" bsPrefix = ".logo-image" fluid />
                        </Col>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/" >
                                    <h5>Doctors</h5>
                                    <h6>Book an appointment</h6>
                                </Nav.Link>
                               
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link href="/login" >
                                    <Button variant="light" bsPrefix = "login-btn" className="login-btn">Login / Signup</Button> 
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
