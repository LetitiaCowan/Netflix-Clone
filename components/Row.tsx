"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useReducer, useRef, useState } from "react";
import Thumbnail from "./Thumbnail";
import { RiOrderPlayFill } from "react-icons/ri";
import { Movie } from "@/typings";

// its kind of like assigning specific typed to parts of your code for error reduction
// of course title with be a type of string, whereas movie we assign to Movie[]
interface Props {
  title: string;
  movies: Movie[];
  // movie: movie | DocumnetData[]
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMove] = useState(false);

  const handleClick = (direction: string) => {
    setIsMove(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5">
      <h2 className="2-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>

      <div className="group relative">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 no-scrollbar"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 opacity-0 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
