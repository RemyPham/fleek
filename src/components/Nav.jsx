import React, { Component } from 'react';
import '../styles/nav.css'

class Nav extends Component {

    handleClick = () => {
        this.props.clbk()
    }

    render() {
        return (
            <div className="nav">
                <p className="app-name">fleek</p>
                
                <div className="button">
                    <button
                    className={this.props.mode ? "button-mode dark" : "button-mode light"}
                    onClick={this.handleClick}
                    >
                        {this.props.mode ? "Dark mode 🌙" : "Light mode ☀️"}
                    </button>
                </div>
            </div>
        );
    }
}

export default Nav;
