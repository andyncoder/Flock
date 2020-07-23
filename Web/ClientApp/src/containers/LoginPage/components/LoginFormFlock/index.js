import React, { Fragment, useEffect, useContext } from 'react';
import { 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Button,
    Container,
    Col,
    Row
} from 'reactstrap';

import './Login.css';


const pStyle = {   
    position: 'absolute',
    top: '20%'
};


const LoginFormBanner = ({
    handleLogin
}) => {

    return(   
        <Fragment>
            <Row className='login-content'>
            <Col sm={4}>    
                <Container style={pStyle}>
                    <Form onSubmit={handleLogin} className='logonForm' method='post'>
                        <h4 className='title'>Log Into Your Account</h4>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                                <Input type='text' name='username' id='username' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input type='password' name='password' id='password' />
                        </FormGroup>
                        <Button color='primary' className='btn-lg' type='submit'>Login</Button>
                    </Form>
                </Container>
            </Col>
            <Col sm={8}>
                <div className='form-banner-image'/>
            </Col>
            </Row>
        </Fragment>
    )
}

export default LoginFormBanner