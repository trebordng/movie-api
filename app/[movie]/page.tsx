"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface MovieDetails {
  title: string;
  id: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  status: string;
  overview: string;
  [key: string]: any; // Add index signature
}

const Details = () => {
  const details: MovieDetails = {
    title: "",
    id: "",
    poster_path: "",
    release_date: "",
    vote_average: "",
    status: "",
    overview: "",
  };
  Object.keys(details).forEach((key) => {
    details[key] = useSearchParams()?.get(key);
  });
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="text-white">
      <button>
        <Link href="/">Back</Link>
      </button>
      <h1 className="text-2xl mt-12">{details.title}</h1>
      <h2 className="text-lg">{details.release_date}</h2>
      <p>Average Point: {details.vote_average}</p>

      <Image
        className="my-12 float-left pr-12"
        src={imagePath + details.poster_path}
        alt={details.title}
        width={500}
        height={500}
        quality={60}
        priority
      />
      <p className="my-12">
        {details.overview}
      </p>
    </div>
  );
};

export default Details;
