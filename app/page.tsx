import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Row from "@/components/Row";
import { Movie } from "@/typings";
import fetchMovies from "@/utis/fetchMovies";
import requests from "@/utis/requests";
import Image from "next/image";
import React from "react";
import Link from 'next/link'

// now that out Movie[] interfave was created and imported, we can now assign that
// tp our api data req, we are now storing that in a interface called "Props" to the
// be used and displayed (can only display outside of app directory)
interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

// pushing the api data through and giving it type "Probs" which we declared above
const Home = async () => {
  const movies: Props = await fetchMovies();

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={movies.netflixOriginals} />
        <section className="md:space-y-6">
          <Row title="Trending Now" movies={movies.trendingNow} />
          <Row title="Top Rated" movies={movies.topRated} />
          <Row title="Action Thrillers" movies={movies.actionMovies} />
          <Row title="Comedies" movies={movies.comedyMovies} />
          <Row title="Scary Movies" movies={movies.horrorMovies} />
          <Row title="Romance Movies" movies={movies.romanceMovies} />
          <Row title="Documentaries" movies={movies.documentaries} />
        </section>
      </main>
    </div>
  );
};

export default Home;