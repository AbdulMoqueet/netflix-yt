import Image from "next/image";
import Link from "next/link";
import React from "react";

const Thumbnail = ({ movie }) => {
  return (
    <Link
      href={`/${movie.id}`}
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        alt="movie poster"
      />
    </Link>
  );
};

export default Thumbnail;
