import React, { Component } from 'react'
import {Row,Col,Tab,Nav} from "react-bootstrap"

export default class Tabs extends Component {
    render() {
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="medi-records">Medical Records</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="appointment">Appointment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="lab-test">Lab Tests</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="medicine-orders">Medicine Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="online-consultation">Online Consultation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="articles">Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="feedback">Feedback</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="payments">Payments</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="medi-records">
                            <h1>medi-records</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="appointment">
                            <h1>appointment</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="lab-test">
                            <h1>lab-test</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="medicine-orders">
                            <h1>Medicine Orders</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="online-consultation">
                            <h1>online-consultation</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="articles">
                            <h1>articles</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="feedback">
                            <h1>feedback</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="payments">
                            <h1>payments</h1>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
