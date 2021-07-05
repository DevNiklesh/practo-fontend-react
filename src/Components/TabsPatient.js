import React from 'react'
import { Row, Col, Nav, Tab } from 'react-bootstrap'
import AcceptedRequest from "./AcceptedRequest"
import RejectedRequest from "./RejectedRequest"
import PendingRequest from "./PendingRequest"
import { useSelector } from "react-redux"
import UploadRecord from "./UploadRecord"
import CompletedApp from "./CompletedApp"


const TabsPatient = (props) => {
    const { appointments } = useSelector(state => state.appointments)


    const app = appointments ? appointments.map((app) => {
        if (app.accept_status === "Accepted") {
            return (<AcceptedRequest id={app._id} />)
        }
        else if (app.accept_status === "Rejected") {
            return (<RejectedRequest id={app._id} />)
        }
        else if (app.accept_status === "pending") {
            return (< PendingRequest id={app._id} />)
        }
        return null
    }) : null
    const prescription = appointments ? appointments.map((app) => {
        if (app.accept_status === "Completed") {
            return (<CompletedApp appId={app._id} patientId={app.patient_id} doctorId={app.doctor_id} />)
        }
        return null
    }) : null

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3} key="col-1">
                    <Nav variant="tabs" className="flex-column">
                        <Nav.Item key="first">
                            <Nav.Link eventKey="appointment" >Appointments</Nav.Link>
                        </Nav.Item>
                        <Nav.Item key="second">
                            <Nav.Link eventKey="prescription">Prescription</Nav.Link>
                        </Nav.Item>
                        <Nav.Item key="third">
                            <Nav.Link eventKey="medical_records">Medical Records</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9} key="col-2">
                    <Tab.Content>
                        <Tab.Pane eventKey="appointment" key="first-content">
                            {app}
                        </Tab.Pane>
                        <Tab.Pane eventKey="prescription" key="second-content">
                            {prescription}
                        </Tab.Pane>
                        <Tab.Pane eventKey="medical_records" key="third-content">
                            <UploadRecord />
                        </Tab.Pane>


                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

    )
}

export default TabsPatient
