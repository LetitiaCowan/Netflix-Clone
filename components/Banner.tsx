"use client";
import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typings";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface Props  {
  netflixOriginals: Movie[]; // Ensure this line is present
}

function Banner({ netflixOriginals }: Props ) {
  // this is saying out useState can either be set to Movie (from our typings) or null
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-x-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-full w-full z-[-10]">
        <Image
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        />
      </div>

      <div className="relative z-10 p-8 space-y-3">
        <h1 className="text-white text-2xl lg:text-7xl md:text-4xl font-bold">
          {movie?.title || movie?.original_name}
        </h1>
        <p className="text-white textshad max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </p>

        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
            Play
          </button>
          <button className="bannerButton bg-[gray]/70">
            More Info
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
