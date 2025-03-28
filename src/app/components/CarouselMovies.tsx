import React from 'react';
import {getAllMovies} from "@/service/movies";
import MultiCarousel from "@/app/components/MultiCarousel";
import Image from "next/image";

export default async function CarouselMovies() {
    const movies = await getAllMovies();
    const images = movies.map(movie => ({
        path: movie.path,
        title: movie.title
    }));
    return (
        <>
            <section className='w-full border'>
                <MultiCarousel>
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image className='h-60 rounded' src={`/images/${image.path}.jpeg`} alt={image.title}
                                   width={310}
                                   height={100}/>
                        </div>
                    ))}
                </MultiCarousel>
            </section>
            <div className="w-[100%] mt-2 border-[1px] border-lightGray/30"></div>
        </>
    );
}