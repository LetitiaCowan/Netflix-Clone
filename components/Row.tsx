import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Thumbnail from "./Thumbnail";

// its kind of like assigning specific typed to parts of your code for error reduction
// of course title with be a type of string, whereas movie we assign to Movie[]
interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  return (
    <div className="h-40 space-y-0.5">
      <h2 className="2-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>

      <div className="group relative">
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

        <div className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 no-scrollbar">
        {movies.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
        </div>
       
      </div>

      <div>
        <ChevronRightIcon className="absolute top-0 bottom-0 right-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  );
}

export default Row;

// <div className="h-40 space-y-0.5">
//       <h2 className="2-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
//         {title}
//       </h2>

//       <div className="group space-x-0.5 relative flex items-center overflow-x-scroll file:md:p-2 no-scrollbar md:space-x-2.5">
//       <div className="absolute z-10">
//         <ChevronLeftIcon className="top-0 bottom-0 left-0 opacity-0 z-40 m-auto h-9 w-9 cursor-pointer  transition hover:scale-125 group-hover:opacity-100" />
//       </div>

//         {movies.map((movie) => (
//           <Thumbnail key={movie.id} movie={movie} />
//         ))}
//       </div>

//       <div>
//         <ChevronRightIcon className="absolute top-0 bottom-0 right-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
//       </div>
//     </div>