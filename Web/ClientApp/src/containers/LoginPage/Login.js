import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { logon } from '../../ducks/login'
import LoginForm from './components/LoginForm'


import './style.css'

const LoginContainer = ({
    user, 
    handleLogin
}) => {

    console.log(user);

    return(
        <LoginForm handleLogin={handleLogin}/>
    )
} 


const mapDispatchToProps = (dispatch) => {
   return {
        handleLogin : e => {
            e.preventDefault();
             let username = e.target.username.value;
             let password = e.target.password.value;
             dispatch(logon(username, password));
        } 
   }
}


const loginContainer =  connect(null, mapDispatchToProps)(LoginContainer);
export { loginContainer as LoginPage }; 
