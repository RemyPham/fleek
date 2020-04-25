import React, { Component } from 'react';

//COMPONENT
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import MovieInfo from '../components/MovieInfo'

//STYLE
import '../styles/home.css'

import moviesData from '../data/movies.json'

class Home extends Component {
    state = {
        movies: moviesData.results,
        selectedMovie: null
    }


    filterMovies = input => {
        this.setState({movies : moviesData.results.filter(movie => {
            return movie.title.toUpperCase().indexOf(input) > -1
        })})
    }


    selectMovie = movie => {
        this.setState({selectedMovie: movie})
    }

    render() {
        return (
            <div>
                <div>
                    <Nav />  
                </div>

                <hr/>
                
                <div className="main-content">
                    <div className="side">
                        <SearchBar
                        data={moviesData}
                        clbk={this.filterMovies}
                        />

                        <ul className="list">
                            {this.state.movies.map((movie, i) => (
                                <MovieList
                                key={i}
                                infos={movie}
                                clbk={this.selectMovie}
                                style={this.state.selectedMovie === movie ? "selected" : ""}
                                />
                            ))}
                        </ul>
                        
                    </div>
                    
                    
                    {this.state.selectedMovie &&<MovieInfo
                    infos={this.state.selectedMovie}
                    />}
                    
                    
                </div>
            </div>
        );
    }
}

export default Home;
