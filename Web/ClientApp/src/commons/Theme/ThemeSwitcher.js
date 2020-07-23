import React, { useState , useContext } from 'react'

import { ThemeContext } from './ThemeProvider'

import './switch.css'


const ThemeSwitch = () => {

    const themeContext = useContext(ThemeContext);
    const [light, setLight] = useState(themeContext.dark)
  

    const toggle = e => {
        let isDark = !light;
        setLight(isDark);
        themeContext.onToggleTheme(isDark);
    }

    return(
        <div className="switch-container">
            <label>
                <input 
                    checked={ light } 
                    onChange={ toggle } 
                    className="switch" 
                    type="checkbox" />
                <div>
                    <div></div>
                </div>
            </label>
        </div>
    )
}

export default ThemeSwitch;