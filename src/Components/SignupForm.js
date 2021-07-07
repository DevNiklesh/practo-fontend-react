import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { signup } from "../Actions/UserLogin"
import { useHistory } from 'react-router-dom';


const SignupForm = () => {
    const [state, setState] = useState({
        name: "",
        email: '',
        password: "",
        isDoctor: false
    })

    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(signup(state))
        setState({ name: "", email: "", password: "" })
        history.push("/login")
    }

    return (
        <>
            <div className="join-practa">
                <h5>Join Practa  </h5>
            </div>
            <hr />
            <Form  >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange={(e) => setState({ ...state, name: e.target.value })} value={state.name} />
                    </Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setState({ ...state, email: e.target.value })} value={state.email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setState({ ...state, password: e.target.value })} value={state.password} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I am a Doctor" onClick={(e) => setState({ ...state, isDoctor: !state.isDoctor })} />
                </Form.Group>
                <Button variant="primary" onClick={() => handleSubmit()}  >
                    Signup
                </Button>
            </Form>

        </>
    )
}
export default SignupForm

