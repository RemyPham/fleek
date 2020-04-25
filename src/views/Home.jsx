import React, { Component } from 'react';
import axios from 'axios'

//COMPONENT
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import MovieInfo from '../components/MovieInfo'


//STYLE
import '../styles/home.css'

// import moviesData from '../data/movies.json'

class Home extends Component {
    state = {
        // movies: moviesData.results,
        movies: [],
        originalList : [],
        selectedMovie: null,

        lightMode : true
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a75fdf772c785fc76d677ff3624da131&language=en-US&page=1')
        .then(res => {
            this.setState({originalList: res.data.results, movies: res.data.results});
        })
        .catch(err => console.log(err))
    }


    filterMovies = input => {
        this.setState({movies: this.state.originalList})

        let filteredArr = [...this.state.originalList].filter(movie => {
            return movie.title.toUpperCase().indexOf(input) > -1
        })

        this.setState({movies: filteredArr})
    }


    selectMovie = movie => {
        this.setState({selectedMovie: movie})
    }

    toggleMode = () => {
        this.setState({lightMode : !this.state.lightMode})
        console.log(!this.state.lightMode)
    }

    render() {
        return (
            <div className={this.state.lightMode ? "home-page light" : "home-page dark"}>
                <div>
                    <Nav
                    mode={this.state.lightMode}
                    clbk={this.toggleMode}
                    />  
                </div>

                <hr/>
                    
                <div className="main-content">
                    <div className="side">
                        <SearchBar
                        data={this.state.originalList}
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
