import React from 'react';
import {getMoviesData} from "@/service/movies";
import MarkdownViewer from "@/app/components/MarkdownViewer";
import Image from "next/image";
import ReviewRating from "@/app/components/ReviewStars";
import CateGory from "@/app/components/CateGory";

type Props = {
    params: {
        slug: string;
    };
}
export default async function MoviesListPage({params: {slug}}: Props) {
    const {title, content, path} = await getMoviesData(slug);

    return (
        <>
            <CateGory/>
            <section className='rounded-2xl overflow-hidden bg-stone-400'>
                <div className='flex gap-12'>
                    <div className='w-auto'>
                        <Image src={`/images/${path}.jpeg`} alt={title} width={400} height={200}/>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold my-10 italic'>{title}</h1>
                        <div className='mt-20'>
                            <p className='text-xl font-bold mb-2'>스토리</p>
                            <MarkdownViewer content={content}/>
                            <div className='mt-12 -mx-4'>
                                <ReviewRating/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}