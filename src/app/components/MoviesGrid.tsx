import React from 'react';
import {Movie} from "@/service/movies";
import MoviesCard from "@/app/components/MoviesCard";

type Props = { movies: Movie[] };
export default function MoviesGrid({movies}: Props) {
    return (<ul className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
        {movies.map((movie) => <li key={movie.path}><MoviesCard movie={movie}/></li>)}
    </ul>);
}