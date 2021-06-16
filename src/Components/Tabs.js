import React from 'react'
import {Row,Col,Tab,Nav,Button} from "react-bootstrap"
import {useSelector } from "react-redux"
import Alert from 'react-bootstrap/Alert'

const Tabs =()=> {
    
        const {user}=useSelector(state=>state.user)
        var data =''
        if(user){
            data = user[0]
        }
        const appointments = data && data.appointments ? data.appointments.map((app)=>{
            if(app.accept_status === "accepted"){
                if(app.appointment_status === 0){
                    return(
                        <Alert  variant="success" key={app.appointmentId}>
                            <Alert.Heading>Hi {user.username}</Alert.Heading>
                                <p>
                                your appointment has been accepted by the doctor and scheduled at {app.appointment_time}
                                </p>
                                     <hr />
                            <div className="d-flex justify-content-end">
                                <Button  variant="outline-success">
                                   join
                                </Button>
                            </div>
                        </Alert>
                    )
                }
                if(app.appointment_status === 1){
                    return(
                    <Alert key={app.appointmentId} variant="danger">
                            The appointment has ended at {app.appointment_time}
                    </Alert>)
                }
            }
            return (
                <Alert key={app.appointmentId} variant="warning" >
                            The appointment has not been accepted by the doctor. please be patient
                </Alert>
            )
        }):null;
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
                            <Nav.Link eventKey="prescription">Prescription</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="medi-records">
                            <h1>medi-records</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="appointment">
                              {appointments}
                            </Tab.Pane>
                            <Tab.Pane eventKey="prescription">
                            {data && data.appointments ? data.appointments.map((app)=>{
                                  return (
                                      <li key={app.appointmentId}>{app.prescriptions}</li>
                                  )
                        
                              }): null}
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    
}


export default Tabs