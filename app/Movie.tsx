import { MovieProps } from "@/Type";
import Image from "next/image";
import Link from "next/link";

const Movie = ({ movie }: { movie: MovieProps }) => {
  const { title, release_date, poster_path } = movie;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/something`}>
        <Image
          unoptimized={true}
          width={800}
          height={800}
          src={`htpp://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
