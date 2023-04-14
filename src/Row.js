import React, { useEffect, useState } from "react"
import axios from "./axios"
import "./row.css"



const base_url="https://image.tmdb.org/t/p/original"


export default function Row(props ) {
    const [movies, setMovies] =useState([])
    useEffect(() => {
    async function fetchData() 
    {
        const request = await axios.get(props.fetchUrl);
        setMovies(request.data.results)

        return request
    }
    fetchData();
    }, [props.fetchUrl]);

    return(
        <div className="row">
        <h2>{props.title}</h2>
        <div className="row-posters">
            {/* row-posters */}
            {movies.map(movie => (<img key={movie.id} className={`row-poster ${props.isLargeRow && "row-posterLarge"}`} src={`${base_url}${props.isLarge ? movie.poster_path : movie.backdrop_path}` 
            }alt={movie.name}/>  
            ))}
        </div>
        
        </div>
    )
}
