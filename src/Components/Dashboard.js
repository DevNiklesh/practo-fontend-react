import React from 'react';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import {Row,Col} from "react-bootstrap"
import Tabs from "./Tabs"
import TabDoctor from "./TabDoctor"
import {useSelector} from "react-redux";

const  Dashboard =()=> {
        const {userInfo} = useSelector(state=>state.userLogin)
        var user = ''
        if(userInfo){
           user = userInfo.user
        }
        
        if(user){
            return (
            <>
                <div style={{"backgroundColor":"#dde2de"}}>
                    <div style={{"backgroundColor":"white","margin":"30px","borderBottom":"1px solid #dde2de","padding":"10px"}}> 
                        <Row>
                            <Col sm={4}>
                                <h4>Your Drive</h4>
                            </Col>
                            <Col sm={8}>
                                <Row>
                                
                                    <AccountBoxRoundedIcon style={{"fontSize":"50px","color":"primary"}}/>
                                    <Col sm={4} style={{"paddingTop":"5px"}}>
                                        <h6 style={{"fontSize":"12px"}}>{user.name}</h6>
                                        <h6 style={{"fontSize":"12px"}}>{user.email}</h6>
                                    </Col>
                                </Row>
                            </Col>
                         </Row>
                    </div>
                </div> 
                <TabDoctor id={user.id} />
                </>
                
            )
    
        }
        return <div>Please login</div>
        
           
        
    }
export default Dashboard
