import React, {useState} from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies(){

    //states- input query and movie
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async(e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=391690c6324b4fe23c4dee785527576f&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
            console.log(movies);
        } catch(err){
            console.log(err);
        }
    }

    return (
    <>
       <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query"> Movie Name </label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park" onChange={(e) => {setQuery(e.target.value)}}/> 
            <button className="button" type="submit"> Search </button>
       </form>
       <div className="card-list">
           {
               movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id}/>
               ) )
           }
       </div>
    </>
    )
}