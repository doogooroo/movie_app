import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component {
//     static propTypes = {
//         title:PropTypes.string.isRequired,
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         //console.log(this.props);
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>Hello, this Movie tile is {this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie ({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)} 
                </div>
                <div className="Movie_Synodivsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
                </div>
            </div>
        </div>
    )
}

function MovieGenre ({genre}) {   
    return (
    <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre:PropTypes.string.isRequired
}

// class MoviePoster extends Component{
//     static propTypes = {
//         poster:PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt="Movie Poster"/>
//         )
//     }
// }

function MoviePoster ({poster, alt}) {
    return(
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}

MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}


export default Movie;