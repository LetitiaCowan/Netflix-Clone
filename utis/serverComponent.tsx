import React, { useEffect, useState } from "react";
import getMovies, { Movies } from "./movies";
import Home from "../app/page"; // Adjust the path as necessary


const ServerComponent = () => {
  const [movies, setMovies] = useState<Movies | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData: Movies = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    fetchMovies();
  }, []);

  if (!movies) {
    return <div>Loading...</div>; // Add a loading state
  }

  return <Home movies={movies} />; // Pass the correct prop name
};

export default ServerComponent;
