import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from "./theme.js";

import './theme.css';

let ThemeContext;
const { Provider, Consumer } = ThemeContext = React.createContext();

class ThemeProvider extends React.Component {

    state = {
        dark: false,
    };

    toggleTheme = toggle => {
        this.setState({ dark: toggle})
    };
    
    render () {

        const computedTheme = this.state.dark ? theme("dark") : theme("light");
        
        return (
            <EmotionThemeProvider theme={computedTheme}>
                <Provider
                    value = {{
                        dark: this.state.dark, 
                        onToggleTheme : this.toggleTheme
                    }}
                >
                { this.props.children }
                </Provider>
            </EmotionThemeProvider>
        )
    }
}

export { ThemeContext, ThemeProvider, Consumer as ThemeConsumer }
