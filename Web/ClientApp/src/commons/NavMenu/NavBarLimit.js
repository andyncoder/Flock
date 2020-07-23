
import React from 'react'

const NavBarLimit = ({toggle}) => {

    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-clear navbar" >
          <a className="navbar-brand" href="/">Flock</a>
          <button type="button" className="mr-2 navbar-toggler" onClick={toggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

      );
}

export default NavBarLimit;