import React from 'react'

import ThemeSwitcher from '../Theme/ThemeSwitcher'
import { AuthConsumer } from '../../contexts/AuthProvider'


const NavBar = ({toggle}) => {
    return (

        <header>
            <AuthConsumer>
                { ({ isAuth, login, logout }) => (

                <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light bg-white navbar">
                <a className="navbar-brand" href="/">Flock</a>
                <button type="button" className="mr-2 navbar-toggler" onClick={toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse collapse navbar-collapse">
                    {         
                        isAuth ? (
                        <ul className="ml-auto navbar-nav">
                            <li className="nav-item">
                            <a href="/explore" className="nav-link">Explorer</a>
                            </li>
                            <li className="nav-item">
                            <a href="/" className="nav-link" onClick={logout}>Logout</a>
                            </li>
                        </ul>
                        )
                        :
                        (
                        <ul className="ml-auto navbar-nav">
                        <li className="nav-item">
                            <a href="/login" className="nav-link" >Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/go" className="nav-link nav-link-top">
                                <button className="btn-start">Get Start</button>
                            </a>
                        </li>
                        </ul>
                        )           
                    }
                    <ul className="navbar-nav flex-grow">
                    <li className="nav-item">
                        <ThemeSwitcher/>
                    </li>
                    </ul>
                </div>
                </nav>

                )}
            </AuthConsumer>
            
        </header>
    );
}


export default NavBar;