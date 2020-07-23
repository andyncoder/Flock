import React, { Component, useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext, AuthConsumer } from '../contexts/AuthProvider'

const PrivateRoutes  = ({ component: ComposedComponent, ...rest }) => { 
    
    const [user, setUser ] = useState(AuthContext);

    class Authentication extends Component {
    
        handleRender = props => {
          if (!this.props.user) {
            return <Redirect to="/login" />
          } else {
            return <ComposedComponent user={this.props.user} {...props} />
          }
        }
        render() {
            return (
              <Route {...rest} render={this.handleRender} />
            );
        }
    }

    return (
        <AuthConsumer>
        {
          ({user}) => <Authentication user={user} />
        }
        </AuthConsumer>
      )
}

export default PrivateRoutes