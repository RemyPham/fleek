import React, { Component } from 'react';

import '../styles/searchBar.css'

class SearchBar extends Component {

    handleChange = (e) => {
        this.props.clbk(e.target.value.toUpperCase())
    }

    render() {
        return (
            <div className="search-bar">
                <span>🔍</span>
                <input
                placeholder="Filter by title..."
                type="text"
                onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SearchBar;

