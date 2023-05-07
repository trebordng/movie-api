import { MovieProps } from "@/Type";
import Image from "next/image";
import Link from "next/link";

const Movie = ({ movie }: { movie: MovieProps }) => {
  const { title, release_date, poster_path,id } = movie;
  const imagePath = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={{ pathname: `/${id}`,  query: {...movie} }}>
        <Image
          className="w-full"
          width={800}
          height={800}
          src={imagePath + poster_path}   
          alt={title}
          quality={80}
        />
      </Link>
    </div>
  );
};

export default Movie;
