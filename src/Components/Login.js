import React, { Component } from 'react'
import {Form,Button,Row,Col,Container,Image,Nav} from "react-bootstrap"
import welcome from "../images/welcome.svg"


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login:true};
      }    
    render() {
        return (
           <Container fluid="md" >
               <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-md-center" style={{"margin-top":"10px"}}>
                    <Nav.Item className={this.state.login? "active-tab":"" }>
                        <Nav.Link href="/login" onClick={()=>{this.setState({login:true})}}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={!this.state.login? "active-tab":"" }>
                        <Nav.Link eventKey="link-1" onClick={()=>{this.setState({login:false})}}>Signup</Nav.Link>
                    </Nav.Item>
                </Nav>
               <Row  className="justify-content-md-center" style={{"margin-top":"100px","padding":"20px","display":"flex"}}>
                   <Col  xs={6} md={4} style={{"margin-top":"50px","margin-right":"40px"}}>
                        <Image src={welcome} fluid/>
                   </Col>
                   <Col  xs={6} md={4} style={{"border":"0.1px solid #dde2de","padding":"15px"}}>
                    { this.state.login? (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>

                    ): (
                        <>
                                 <div className="join-practa">
                                        <h5>Join Practa  </h5>
                                        <h5>  Are you a Doctor? <a href="/">Register Here</a></h5>
                                 </div>
                                 <hr/>
                                <Form>
                                    
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Signup
                                    </Button>
                                </Form>
                                </>
                  
                    )
                    }   
                    
                   </Col>
               </Row>
           </Container>
        )
    }
}
