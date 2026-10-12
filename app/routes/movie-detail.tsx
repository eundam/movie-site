import { Link, useParams } from "react-router";
import { movies } from "./movies";

export default function MovieDetail() {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <h2>영화를 찾을 수 없습니다.</h2>;
  }

  return (
    <div>
      <Link to="/movies" className="text-yellow-400">
        ← 영화 목록으로
      </Link>

      <div className="mt-8 bg-gray-800 rounded-xl p-8 flex flex-col md:flex-row gap-10">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full md:w-72 rounded-lg object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold mb-6">
            {movie.title}
          </h1>

          <p className="text-gray-400 mb-4">
            장르: {movie.genre}
          </p>

          <p className="text-gray-400 mb-4">
            개봉 연도: {movie.year}
          </p>

          <p className="text-yellow-400 mb-8">
            ⭐ 평점: {movie.rating}
          </p>

          <h2 className="text-2xl font-bold mb-4">
            줄거리
          </h2>

          <p className="text-gray-300 leading-7">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
}