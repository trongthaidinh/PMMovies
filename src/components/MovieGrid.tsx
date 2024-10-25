import MovieCard from "./movie-card";

type Props = {
  list: any[];
};

const MovieGrid = ({ list = [] }: Props) => {
  return (
    <ul className="grid grid-cols-6 gap-6">
      {list.map((item) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MovieGrid;
