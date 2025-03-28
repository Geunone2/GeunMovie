'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 2
    }
};

import React from 'react';

type Props = {
    children: React.ReactNode;
}
export default function MultiCarousel({children}: Props) {
    return (<Carousel containerClass='w-full flex gap-0' infinite autoPlay responsive={responsive}>
            {children}</Carousel>
    );
}