import React, {useEffect, useState} from 'react';
import '../styles/ToggleSwitchBox.css'
import {useColorMode} from "theme-ui";

const ToggleThemeSwitchBox = () => {
    const [colorMode, setColorMode] = useColorMode()
    const [isChecked, setIsChecked] = useState();
    const theme = localStorage.getItem('theme-ui-color-mode')
    useEffect(() => {
        if(theme==='light'){
            setIsChecked(true)
        }
        else {
            setIsChecked(false)
        }
    }, [])
    const toggleTheme = () => {
        if (colorMode === 'light') {
            setIsChecked(false)
            setColorMode('dark')
        }
        else {
            setIsChecked(true)
            setColorMode('light')
        }
    }
    return (

        <div className="toggle">
            <input checked={isChecked}
                   onChange={toggleTheme}
                   type="checkbox" id="toggle"/>
            <label htmlFor="toggle"></label>
        </div>
    );
};

export default ToggleThemeSwitchBox;