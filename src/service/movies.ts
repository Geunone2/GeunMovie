import path from "node:path";
import {readFile} from "node:fs/promises";

export type Movie = {
    title: string;
    director: string;
    actors: string;
    genre: string;
    date: Date;
    path: string;
}

export type MovieData = Movie & { content: string };

export async function getAllMovies(): Promise<Movie[]> {
    const filePath = path.join(process.cwd(), 'data', 'movies.json');
    return readFile(filePath, 'utf-8')
        .then<Movie[]>(JSON.parse)
        .then(movies => movies.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getMoviesData(fileName: string): Promise<MovieData> {
    const filePath = path.join(process.cwd(), 'data', 'movies', `${fileName}.md`);
    const metadata = await getAllMovies()
        .then((movies) => movies.find((movie) => movie.path === fileName));

    if (!metadata)
        throw new Error(`${fileName}에 해당하는 영화목록들을 찾을 수 없음`);

    const content = await readFile(filePath, 'utf-8');

    return {...metadata, content};
}
