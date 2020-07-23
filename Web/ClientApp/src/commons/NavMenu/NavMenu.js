
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import './NavMenu.css';

import NavBarLimit from './NavBarLimit';
import NavBar from './NavBar'

class NavMenu extends React.Component {

  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };


  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {

    const isLogin = this.props.location && this.props.location.pathname === '/login';
    return (
        isLogin ? 
        ( 
          <NavBarLimit toggle={this.toggle}/>
        ) :
        (
          <NavBar toggle={this.toggle}/>
        )
    )
  }
}

const mapStateToProps = (state) => {
   
  console.log(state);
  return {

   }
}

const NavMenuContainer =  connect(mapStateToProps, null)(withRouter(NavMenu));
export { NavMenuContainer as NavMenu }