import fetchMovies from "./fetchMovies";
import { Movie } from "@/typings";

export interface Movies {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
} 

const getMovies = async (): Promise<Movies> => {
  const movies: Movies = await fetchMovies();
  return movies;
}

export default getMovies;
