import RecentlyUpdated from "./(home)/_components/MoviesByGenre";
import MovieSection from "./movie/_components/MovieSection";

export default function Home() {
  return (
    <div className="container">
      <section className="py-8 sm:py-10 md:py-12 lg:py-14">
        <MovieSection
          title="Phim bộ đang chiếu"
          slug="/phim-bo-dang-chieu"
          path="get-movies-by-list"
        />
      </section>
      <section className="py-8 sm:py-10 md:py-12 lg:py-14">
        <h1 className="text-xl uppercase max-md:pb-3 sm:text-2xl md:text-3xl lg:text-4xl">
          Phim theo thể loại
        </h1>
        <RecentlyUpdated />
      </section>
      <section className="py-8 sm:py-10 md:py-12 lg:py-14">
        <MovieSection
          title="TV shows"
          slug="/tv-shows"
          path="get-movies-by-list"
        />
      </section>
      <section className="py-8 sm:py-10 md:py-12 lg:py-14">
        <MovieSection
          title="Phim sắp chiếu"
          slug="/phim-sap-chieu"
          path="get-movies-by-list"
        />
      </section>
    </div>
  );
}
