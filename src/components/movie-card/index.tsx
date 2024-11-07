import React from "react";
import Link from "next/link";
import { Bookmark, PlayIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookmark } from "@/hooks/api/useBookmark";
import MovieImage from "../MovieImage";

type Props = {
  item: any;
  className?: string;
};

const MovieCard = ({ item, className }: Props) => {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmark();
  const bookmarked = isBookmarked(item?.slug);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (bookmarked) {
      removeBookmark(item?.slug);
    } else {
      addBookmark(item);
    }
  };

  return (
    <div className={cn("flex size-full flex-col", className)}>
      <Link
        href={`/movie/${item?.slug}`}
        className="relative block overflow-hidden rounded-lg [&:hover_.overlay]:opacity-100"
      >
        <div className="z-1 overlay absolute inset-0 flex size-full items-center justify-center bg-black/50 p-3 opacity-0 transition-all duration-[250ms] ease-in">
          <button
            className={cn(
              "absolute right-3 top-3 flex size-9 items-center justify-center rounded-md transition-colors",
              bookmarked ? "bg-primary" : "bg-black hover:bg-primary/80",
            )}
            onClick={handleBookmark}
          >
            <Bookmark
              className="size-5"
              strokeWidth={1.75}
              fill={bookmarked ? "white" : "none"}
            />
          </button>
          <div className="size-16 rounded-full bg-white/10 p-1.5 transition-colors duration-200 hover:bg-primary/30">
            <button className="flex size-full items-center justify-center rounded-full bg-white">
              <PlayIcon className="size-7 text-primary" />
            </button>
          </div>
        </div>
        <div className="relative aspect-[2/3] w-full" style={{ fontSize: 0 }}>
          <MovieImage
            src={item.thumb_url}
            alt={item.name}
            className="rounded-lg object-cover"
            priority={false}
          />
          {item?.tmdb?.vote_average && (
            <div
              className="absolute left-3 top-3 z-10 flex size-9 items-center justify-center rounded-full border-2 bg-black/50 text-sm font-medium backdrop-blur-md"
              style={{
                borderColor:
                  item.tmdb.vote_average >= 7
                    ? "green"
                    : item.tmdb.vote_average >= 5
                      ? "yellow"
                      : "red",
              }}
            >
              {item.tmdb.vote_average.toFixed(1)}
            </div>
          )}
        </div>
      </Link>
      <div className="mt-3">
        <Link
          href={`/movie/${item?.slug}`}
          className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm transition-colors duration-150 hover:text-primary lg:text-xl"
        >
          {item?.name}
        </Link>
        <Link
          href={`/the-loai/${item?.category?.[0]?.slug || ""}`}
          className="mt-1 text-sm text-primary decoration-[1.5px] hover:underline lg:text-lg"
        >
          {item?.category?.[0]?.name} - {item?.country?.[0]?.name}
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
