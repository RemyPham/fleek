import React, { Component } from 'react';

import '../styles/movieList.css'

class MovieList extends Component {

    handleClick = () => {
        this.props.clbk(this.props.infos);
    }

    render() {
        return (
            <li
            onClick={this.handleClick}
            className={this.props.style}
            >
                {this.props.infos.title}
            </li>
        );
    }
}

export default MovieList;
