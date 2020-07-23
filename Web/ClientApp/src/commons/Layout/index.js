import React, { useContext, Fragment } from 'react';

// components
import NavMenu from '../NavMenu/NavMenu'
import Footer from '../Footer'

import { withContext } from './withContext';

import './style.css';

const Layout = props => {

   const { showNavbar,  showFooter } = props.context;
   
    return (    
      <Fragment>
          { showNavbar && <NavMenu/> }
          <main>  
            {props.children}
          </main>
          { showFooter && <Footer /> }
      </Fragment>
  )
}

export default withContext(Layout);