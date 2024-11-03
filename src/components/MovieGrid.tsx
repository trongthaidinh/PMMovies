import Loader from "./Loader";
import MovieCard from "./movie-card";
import Pagination from "./Pagination";

interface Props {
  list: any[];
  isLoading: boolean;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

const MovieGrid = ({ isLoading, list = [], pagination }: Props) => {
  return (
    <div>
      {isLoading ? (
        <div className="flex min-h-[500px] items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {list.map((item) => (
              <MovieCard key={item._id} item={item} />
            ))}
          </ul>

          {pagination && list.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={pagination.onPageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MovieGrid;
