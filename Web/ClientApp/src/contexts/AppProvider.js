import React from 'react';

let AppContext;
const { Provider, Consumer } = AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }    
      }
   
    componentWillMount() {

        let token = localStorage.getItem('accessToken');
        
        console.log('AppProvider ', token);
        this.setState({ user : token });
    }

   
    render () {
        return(
            <Provider
                value={{
                    user: this.state.user
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { AppContext, AppProvider, Consumer as AppConsumer };
