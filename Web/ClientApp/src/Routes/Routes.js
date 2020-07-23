import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';


// components
import { NavMenu } from '../commons/NavMenu/NavMenu';
import Footer from '../commons/Footer'
import { ExplorePage }  from '../containers/ExplorePage/ExplorePage';
import { LoginPage } from '../containers/LoginPage/LoginBasic';
import { BasicPage } from '../containers/BasicPage/BasicPage';
import { DashboardPage } from '../containers/DashboardPage/DashboardPage';
import { DiscoveryPage } from '../containers/DiscoveryPage/DiscoveryPage';
import { GetStartPage } from '../containers/GetStartPage/GetStartPage';


import PrivateRoutes from '../Routes/PrivateRoutes'

const Routes = (props) => {

    return (
      <Fragment>
          <NavMenu/>
          <Switch>
            <PrivateRoutes exact path='/dashboard' component={DashboardPage} />
            <PrivateRoutes exact path='/discover' component={DiscoveryPage} />
            <Route exact path='/explore' component={ExplorePage} />
            <Route exact path='/login' component={LoginPage} />} />
            <Route exact path='/go' component={GetStartPage} />} />
            <Route exact path='/' component={BasicPage} />
          </Switch>
          <Footer/>
       </Fragment>
    );
}

export default Routes;