import React from "react";

class MovieItem extends React.Component{
    state = {
        willWatch: false
    }

    componentWillUnmount() {
        console.log("unmount", this.props.movie.title);
    }
    

    toggleWillWatch = () => {
        this.setState({willWatch: !this.state.willWatch});
    }

    render() {
        const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
        //console.log(this.props);
        return(
            // <div>
            //     <p>{movie.title}</p>
            //     <button onClick={removeMovie.bind(this, movie)}>
            //     Delete Movie
            //     </button>
            // </div>
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="card-body">
                    <h6 className="card-title mb-0">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <p className="mb-0">Rating: {movie.vote_average}</p>
                    <button type="button" className={this.state.willWatch ? "btn btn-success" : "btn btn-secondary"} onClick={()=>{
                            this.toggleWillWatch();
                            this.state.willWatch ? removeMovieFromWillWatch(movie) : addMovieToWillWatch(movie);
                        }}>
                        {this.state.willWatch ? "Remove" : "Will Watch"}
                    </button>
                    </div>
                    <button className="btn btn-outline-dark" onClick={removeMovie.bind(this, movie)}>Delete Movie</button>
                </div>
            </div>
        )
    }
}


export default MovieItem;

