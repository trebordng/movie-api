import Movie from "./Movie";
import { MovieProps } from "@/Type";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main className="bg-black text-white">
      <h1>test</h1>
      {res.results?.map((movie: MovieProps) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
