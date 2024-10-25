import MovieSwiper from "@/components/MovieSwiper";
import { newItems } from "@/constants";
import RecentlyUpdated from "./(home)/_components/RecentlyUpdated";

export default function Home() {
  return (
    <div className="container">
      <section className="py-14">
        <h1 className="text-5xl uppercase">
          <b>NEW ITEMS</b> OF THIS SEASON
        </h1>
        <div className="mt-8">
          <MovieSwiper list={newItems} />
        </div>
      </section>
      <section className="py-14">
        <h2 className="text-4xl uppercase">Recently updated</h2>
        <RecentlyUpdated />
      </section>
    </div>
  );
}
