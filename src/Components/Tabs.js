import React from 'react'
import {Row,Col,Nav,Tab} from 'react-bootstrap'
import RequestAlert from "./RequestAlert"
import AcceptedRequest from './AcceptedRequest'
import { useSelector } from 'react-redux'
const  Tabs=()=> {
 

    const {appointments} = useSelector(state=>state.appointments)
    
    
    const pendingAppointment = appointments ? appointments.map((app)=>{
        if(app.accept_status === "pending"){
         
            return (
                <RequestAlert id={app._id} />
            )
        } 
        return null
    }):null
    const accepted = appointments ? appointments.map((app)=>{
        if(app.accept_status==="Accepted"){
            return(
                <AcceptedRequest appId={app._id} doctorId={app.doctor_id} patientId={app.patient_id}/>
            )
        }
        return null
    }):null
    return (
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3} key="col-1">
                                <Nav variant="tabs" className="flex-column">
                                    <Nav.Item key="first">
                                        <Nav.Link eventKey="first" >Appointments</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item key="second">
                                        <Nav.Link eventKey="second">Requests</Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item key="third">
                                        <Nav.Link eventKey="third">Available Slots</Nav.Link>
                                    </Nav.Item> */}
                                </Nav>
                            </Col>
                            <Col sm={9} key="col-2">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" key="first-content">
                                    {accepted}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" key="second-content">
                                    {pendingAppointment}
                                    </Tab.Pane>
                                    {/* <Tab.Pane eventKey="third" key="third-content">
                                        available slots
                                    </Tab.Pane> */}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
            
            )
    }
export default Tabs
