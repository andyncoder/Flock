import React, { Fragment, useEffect, useContext } from 'react';
import { 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Button,
    Container
} from 'reactstrap';

import './Login.css';


const pStyle = {
    height: '100vh'
  };

const LogonForm = ({
    handleLogin
}) => {

    return(
        <Fragment>
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
                    <Button color='primary' type='submit'>Login</Button>
                </Form>
            </Container>
        </Fragment>
    )
}

export default LogonForm