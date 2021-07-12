import React, { useEffect } from 'react'
import { Row, Col, Container, Image, Tabs, Tab } from "react-bootstrap"
import welcome from "../images/welcome.svg"
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';
import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SignupForm'

const Login = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const history = useHistory()
    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo,])

    return (


        <Container fluid="md" style={{ "marginTop": "25px" }}>
            <Tabs defaultActiveKey="login" className="justify-content-md-center" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login" >
                    <Row className="justify-content-md-center" style={{ "marginTop": "50px", "padding": "20px", "display": "flex" }}>
                        <Col xs={6} md={4} style={{ "marginTop": "50px", "marginRight": "40px" }}>
                            <Image src={welcome} fluid />
                        </Col>
                        <Col xs={6} md={4} style={{ "border": "0.1px solid #dde2de", "padding": "15px" }}>
                            <LoginForm />
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="signup" title="Signup" >
                    <Row className="justify-content-md-center" style={{ "marginTop": "100px", "padding": "20px", "display": "flex" }}>
                        <Col xs={6} md={4} style={{ "marginTop": "50px", "marginRight": "40px" }}>
                            <Image src={welcome} fluid />
                        </Col>
                        <Col xs={6} md={4} style={{ "border": "0.1px solid #dde2de", "padding": "15px" }}>
                            <SignupForm />
                        </Col>
                    </Row>
                </Tab>
            </Tabs>

        </Container>
    )
}


export default Login