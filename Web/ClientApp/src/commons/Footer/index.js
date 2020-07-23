import React from 'react'
import { withRouter } from 'react-router'
import { Container, 
    Row, 
    Col, 
    Nav, 
    NavItem, 
    NavLink 
} from 'reactstrap';

import './footer.css';

const Footer = ({location}) => {

    //console.log(location)
    if (location && location.pathname === '/login') {
        return null;
    }

    return (
        
        <footer className='footer'>
            <Container>
                <Row>
                    <Col sm="2">
                        <h3 className="nav-title brand">Flock</h3>
                    </Col>
                    <Col sm="2">
                        <h3 className="nav-title">Company</h3>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm="2">
                        <h3 className="nav-title">Communities</h3>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Developers</NavLink>
                                <NavLink href="#">Vendors</NavLink>
                            </NavItem>
                        </Nav>

                    </Col>
                    <Col sm="2">
                        <h3 className="nav-title">Useful links</h3>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Help</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default withRouter(Footer);