import React from 'react';
import {Movie} from "@/service/movies";
import Link from "next/link";
import Image from "next/image";

type Props = { movie: Movie };
export default function MoviesCard({movie: {title, director, actors, genre, date, path}}: Props) {
    return (<Link href={`/movies/${path}`}>
        <article className='rounded-md overflow-hidden shadow-lg lg:hover:scale-110 border-2'>
            <Image
                className='w-full h-90'
                src={`/images/${path}.jpeg`} alt={title} width={300} height={200}/>
            <div className='flex flex-col p-4'>
                <time className='self-end text-gray-700'>{date.toString()}</time>
                <h3 className='w-full truncate text-lg font-bold text-center'>{title}</h3>
                <p className='w-full truncate my-1'>감독: {director}</p>
                <p className='w-full truncate'>배우: {actors}</p>
                <span className='text-sm font-bold bg-gray-400 px-2 my-2 mx-auto rounded-lg'># {genre}</span>
            </div>
        </article>
    </Link>);
}