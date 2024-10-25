import Loader from "./Loader";
import MovieCard from "./movie-card";

type Props = {
  isLoading: boolean;
  list: any[];
};

const MovieGrid = ({ isLoading, list = [] }: Props) => {
  return (
    <div>
      {isLoading ? (
        <div className="flex min-h-[500px] items-center justify-center">
          <Loader />
        </div>
      ) : (
        <ul className="grid grid-cols-6 gap-6">
          {list.map((item) => (
            <MovieCard key={item._id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieGrid;
