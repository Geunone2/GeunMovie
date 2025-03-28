import FeatureMovies from "@/app/components/FeatureMovies";
import CarouselMovies from "@/app/components/CarouselMovies";
import CateGory from "@/app/components/CateGory";

export default function Home() {
    return (
        <>
            <CateGory/>
            <CarouselMovies />
            <FeatureMovies/>
        </>
    );
}
