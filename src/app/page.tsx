import RecentlyUpdated from "./(home)/_components/MoviesByGenre";
import MovieSection from "./movie/_components/MovieSection";

export default function Home() {
  return (
    <div className="container">
      <section className="py-14">
        <h2 className="text-5xl uppercase">TV series showing</h2>
        <MovieSection slug="/phim-bo-dang-chieu" path="get-movies-by-list" />
      </section>
      <section className="py-14">
        <h1 className="text-4xl uppercase">movies by genre</h1>
        <RecentlyUpdated />
      </section>
      <section className="py-14">
        <h2 className="text-5xl uppercase">TV shows</h2>
        <MovieSection slug="/tv-shows" path="get-movies-by-list" />
      </section>
      <section className="py-14">
        <h2 className="text-5xl uppercase">movie upcoming</h2>
        <MovieSection slug="/phim-sap-chieu" path="get-movies-by-list" />
      </section>
    </div>
  );
}
