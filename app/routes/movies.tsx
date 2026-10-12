import { Link } from "react-router";

export const movies = [
  {
    id: 1,
    title: "인터스텔라",
    genre: "SF",
    year: 2014,
    rating: 9.2,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "인류의 미래를 위해 우주로 떠나는 탐험가들의 이야기입니다.",
  },
  {
    id: 2,
    title: "인셉션",
    genre: "SF / 액션",
    year: 2010,
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "다른 사람의 꿈속에 들어가 생각을 훔치는 이야기입니다.",
  },
  {
    id: 3,
    title: "다크 나이트",
    genre: "액션",
    year: 2008,
    rating: 9.1,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "배트맨과 조커의 치열한 대결을 그린 영화입니다.",
  },
  {
    id: 4,
    title: "어벤져스: 엔드게임",
    genre: "액션 / SF",
    year: 2019,
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "사라진 인류를 되찾기 위한 히어로들의 마지막 전투입니다.",
  },
  {
    id: 5,
    title: "기생충",
    genre: "드라마 / 스릴러",
    year: 2019,
    rating: 8.9,
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "서로 다른 환경에서 살아가는 두 가족의 이야기입니다.",
  },
  {
    id: 6,
    title: "조커",
    genre: "드라마 / 범죄",
    year: 2019,
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "고담시에서 살아가는 아서 플렉의 이야기입니다.",
  },
];

export default function Movies() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        🎥 영화 목록
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">
                {movie.title}
              </h2>

              <p className="text-gray-400 mb-2">
                {movie.genre} | {movie.year}
              </p>

              <p className="text-yellow-400 mb-4">
                ⭐ {movie.rating}
              </p>

              <Link
                to={`/movies/${movie.id}`}
                className="block text-center bg-yellow-400 text-black py-2 rounded-lg font-bold hover:bg-yellow-500"
              >
                상세 보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}