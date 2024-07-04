import { Movie } from "@/typings";
import Image from "next/image";
import React from "react";

interface Props {
  movie: Movie;
  // when usuing firebase
  // movie: Movie | DocumentData;
}

function Thumbnail({ movie }: Props) {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:hg-36 md:min-w-[200px] 
    md:hover:scale-105 overflow-hidden"
    >
      <Image
        alt="string"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default Thumbnail;
