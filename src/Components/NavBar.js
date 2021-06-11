import React, { Component } from 'react'
import {Navbar,Container,Nav,Image,Col,Button} from "react-bootstrap"
import logo from '../images/Practo-logo.png'
import { Link } from "react-router-dom"


export default class NavBar extends Component {
    render() {
        return (
            <Navbar style={{"backgroundColor":"white","border":"1px solid #dde2de"}}>
                <Container>
                    <Navbar.Brand href="/">
                        <Col>
                            <Image src={logo} className = "logo-image" bsPrefix = ".logo-image" fluid />
                        </Col>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" style={{ "textDecoration": 'none' }}>
                                    <div>   
                                        <h5 >Doctors</h5>
                                        <h6>Book an appointment</h6>
                                    </div>
                                </Link>
                               
                            </Nav>
                            <Nav className="ml-auto">
                                <Link to="/login" style={{ "textDecoration": 'none' }}>
                                    
                                        <Button variant="light" bsPrefix = "login-btn" className="login-btn">Login / Signup</Button> 
                                    
                                </Link>
                               
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
