import React, {useState} from 'react';
import '../styles/nav.css'

export default function Nav() {
    const [mode, setMode] = useState("light");

    return (
        <div className="nav">
            <p className="app-name">fleek</p>
            
            <div className="button">
               {mode === "light" ? <button className="button-mode dark">Dark mode 🌙</button> : <button className="button-mode light">Light mode ☀️</button>}
            </div>
        </div>
    )
}
