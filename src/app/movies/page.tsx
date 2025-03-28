import React, {Suspense} from 'react';
import {getAllMovies} from "@/service/movies";
import MoviesGrid from "@/app/components/MoviesGrid";
import CateGory from "@/app/components/CateGory";

export default async function MoviesPage() {
    const movies = await getAllMovies();
    return (
        <>
            <CateGory/>
            <section>
                <MoviesGrid movies={movies}/>
            </section>
        </>
    );
}
