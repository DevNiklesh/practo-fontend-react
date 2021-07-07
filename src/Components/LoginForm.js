import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {loginUser} from "../Actions/UserLogin";
import {useDispatch} from "react-redux"

const LoginForm=({location,history})=> {
    const [state,setState] = useState({
        email:"",
        password:"",
        isDoctor:false
        })
    const dispatch = useDispatch()         
    const  handleSubmit=()=>{
     dispatch(loginUser(state))

} 

    return (
        <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email / Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onInput={(e)=>setState({...state,email:e.target.value})} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onInput={(e)=>setState({...state,password:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Iam a Doctor" onClick={()=>setState({...state,isDoctor:true})}/>
        </Form.Group>
        <Link to="/">
            <Button variant="primary" type="submit" onClick={() =>handleSubmit()}>
                 Login
            </Button>
        </Link>
        
    </Form>
    )
}

export default LoginForm
