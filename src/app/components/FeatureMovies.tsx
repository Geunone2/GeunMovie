import React from 'react';
import MoviesGrid from "@/app/components/MoviesGrid";
import {getAllMovies} from "@/service/movies";

export default async function FeatureMovies() {
    const movies = await getAllMovies();
    return (<section>
        <h2 className='text-2xl font-bold my-2 mt-2 italic'>무비 차트</h2>
        <MoviesGrid movies={movies}/>
    </section>);
}