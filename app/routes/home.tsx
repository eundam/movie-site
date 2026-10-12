import { Link } from "react-router";

export default function Home() {
  return (
    <div className="text-center py-32">

      <h1 className="text-5xl font-bold mb-6">
        🎬 MovieZone
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        다양한 영화를 만나보세요!
      </p>

      <Link
        to="/movies"
        className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500"
      >
        영화 목록 보기
      </Link>

    </div>
  );
}