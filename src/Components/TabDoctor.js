import React,{useEffect} from 'react'
import {Row,Col,Tab,Nav,Button,Card} from "react-bootstrap"
import {useSelector,useDispatch} from "react-redux"
import Alert from 'react-bootstrap/Alert'
import listAppointment from "../Actions/ListAppointments"

const TabDoctor =((props)=> {
       const dispatch = useDispatch()
       const fetchAppointment = ()=>{
           dispatch(listAppointment({id:"60c8c9dfa350111009818936"}))
       }
       const {appointments} = useSelector(state=>state.appointments)
       
        return (
            
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="appointments" onClick={()=>fetchAppointment()}>Appointments</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="request">Appointment Requests</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="slot">Available Slots</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="appointments">
                            appointments
                            </Tab.Pane>
                            <Tab.Pane eventKey="request">
                              requests
                            </Tab.Pane>
                            <Tab.Pane eventKey="slot">
                            availableslots
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    
}
)


export default TabDoctor