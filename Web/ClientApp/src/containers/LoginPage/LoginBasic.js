import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router'

import { authService } from '../../services/auth';
import { AuthContext } from '../../contexts/AuthProvider'

// components
import LoginFormFlock from './components/LoginFormFlock'

import './style.css'


const LoginBasic = ({
    history }) => {
  
    const userContext = useContext(AuthContext);

    useEffect(() =>{ 
        if (userContext.user) {
            history.push('/discover')
        }
    })

    const handleLogin = (e) => {

        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        authService.login(username, password)
                   .then( auth => {

                        //auth.setToken(response.jwt, body.rememberMe);
                        //auth.setUserInfo(response.user, body.rememberMe);
                        
                        userContext.setUser(auth);

                        redirectUser();
                   })
    }

    const redirectUser = () => {
        history.push('/deck');
    }
    
    return (
        <LoginFormFlock handleLogin={ handleLogin }/>
    )
}

const LoginPage = withRouter(LoginBasic);
export { LoginPage }