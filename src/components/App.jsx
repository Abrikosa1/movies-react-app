import React from "react";
//import moviesData from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import Pagination from "./Pagination";
import { API_URL, API_KEY_3, API_KEY_4 } from "../utils/api"
import "../stylesheets/index.scss";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      page: 1,
      total_pages: 0
    }
  };

  componentDidMount() {
    this.getMovies();
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page){
      this.getMovies();
    }
  };
  

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}`).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        movies: data.results,
        total_pages: data.total_pages
      });
    })
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {return item.id !== movie.id; });
    this.setState({
      movies: updateMovies
    });
  };
  
  addMovieToWillWatch = movie => {
    //this.state.moviesWillWatch.push(movie);
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    // updateMoviesWillWatch.push(movie);

    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
    console.log(updateMoviesWillWatch);
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value,
      page: 1
    });
  };

  updatePageNum = value => {
    this.setState({
      page: value
    });    
  };

  render() {
    //console.log(this);
    return (
      <div className="container"> 
        <div className="row">
          <div className="col-9">
            <div className="row mb-4 mt-4">
              <div className="col-12">
                <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
              </div>
            </div>
            <div className="row">
            {this.state.movies.map(movie => {
                return (
                  <div className="col-4 mb-4" key={movie.id} >
                    <MovieItem movie={movie} removeMovie={this.removeMovie} 
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch}/>
                  </div>
                )
              })}
            </div>
            <Pagination page={this.state.page} total_pages={this.state.total_pages} updatePageNum={this.updatePageNum}/>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );

  }

}

export default App;

