import RecentlyUpdated from "./(home)/_components/MoviesByGenre";
import MovieSection from "./movie/_components/MovieSection";

export default function Home() {
  return (
    <div className="container">
      <section className="py-14">
        <MovieSection
          title="TV series showing"
          slug="/phim-bo-dang-chieu"
          path="get-movies-by-list"
        />
      </section>
      <section className="py-14">
        <h1 className="text-4xl uppercase">movies by genre</h1>
        <RecentlyUpdated />
      </section>
      <section className="py-14">
        <MovieSection
          title="TV shows"
          slug="/tv-shows"
          path="get-movies-by-list"
        />
      </section>
      <section className="py-14">
        <MovieSection
          title="movie upcoming"
          slug="/phim-sap-chieu"
          path="get-movies-by-list"
        />
      </section>
    </div>
  );
}
