import React, { Component } from 'react'
import {Form,Button,Row,Col,Container,Image,Nav} from "react-bootstrap"
import welcome from "../images/welcome.svg"
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import {loginUser} from "../Actions/UserLogin";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login:true,
                        email : "",
                        password:"",
                        isDoctor:false};
      }    
    handleSubmit(){
        this.props.dispatch(loginUser(this.state))
        console.log(this.state)
    }  
    render() {
        return (
           <Container fluid="md" >
               <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-md-center" style={{"marginTop":"10px"}}>
                    <Nav.Item className={this.state.login? "active-tab":"" }>
                        <Nav.Link href="/login" onClick={()=>{this.setState({login:true})}}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={!this.state.login? "active-tab":"" }>
                        <Nav.Link eventKey="link-1" onClick={()=>{this.setState({login:false})}}>Signup</Nav.Link>
                    </Nav.Item>
                </Nav>
               <Row  className="justify-content-md-center" style={{"marginTop":"100px","padding":"20px","display":"flex"}}>
                   <Col  xs={6} md={4} style={{"marginTop":"50px","marginRight":"40px"}}>
                        <Image src={welcome} fluid/>
                   </Col>
                   <Col  xs={6} md={4} style={{"border":"0.1px solid #dde2de","padding":"15px"}}>
                    { this.state.login? (
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email / Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onInput={(e)=>this.setState({...this.state,email:e.target.value})} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  onInput={(e)=>this.setState({...this.state,password:e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Iam a Doctor" onClick={()=>this.setState({...this.state,isDoctor:true})}/>
                        </Form.Group>
                        <Link to="/dashboard">
                            <Button variant="primary" type="submit" onClick={() =>this.handleSubmit()}>
                                 Login
                            </Button>
                        </Link>
                        
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
// function mapDispatchToProps(dispatch) {
//     return({
//         sendTheAlert: () => {dispatch()}
//     })
// }

function mapStateToProps(state) {
    return({
        user: state.user})
}

export default connect(
    mapStateToProps)(
    Login
)