
import React, { createContext, useContext } from 'react'

let AuthContext;
const { Provider, Consumer } = AuthContext = createContext();
const useStateValue = () => useContext(AuthContext);

class AuthProvider extends React.Component {

    constructor(props){
        super(props);
        this.state = { user : null, isAuth: false }   
    }   
    
    componentWillMount() {

        let token = localStorage.getItem('accessToken');
        
        console.log('AppProvider user ', token);
        this.setState({ user : token, isAuth: token !== null });
    }

    handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem('accessToken');
        this.setState({ isAuth: false, user: null })
        
    }

    handleSetUser = user => {
        this.setState({ user: user})
    }

    render() {
        return (
            <Provider
                value={{ 
                    user : this.state.user,
                    isAuth: this.state.isAuth,
                    setUser: this.handleSetUser,
                    logout: this.handleLogout
                 }}
            >
                {this.props.children}
            </Provider>
        )
        
    }
}


export { AuthContext, AuthProvider, Consumer as AuthConsumer, useStateValue }