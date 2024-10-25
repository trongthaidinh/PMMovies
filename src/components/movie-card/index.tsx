import React from "react";
import Image from "../Image";
import Link from "next/link";
import { Bookmark, PlayIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IMAGE_URL } from "@/constants/base";

type Props = {
  item: any;
  className?: string;
};

const MovieCard = ({ item, className }: Props) => {
  return (
    <div className={cn("flex size-full flex-col", className)}>
      <Link
        href={`/movie/${item?._id}`}
        className="relative block flex-1 overflow-hidden rounded-lg [&:hover_.overlay]:opacity-100"
      >
        <div className="z-1 overlay absolute inset-0 flex size-full items-center justify-center bg-black/50 p-3 opacity-0 transition-all duration-[250ms] ease-in">
          <button
            className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-md bg-black"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Bookmark className="size-5" strokeWidth={1.75} />
          </button>
          <div className="size-16 rounded-full bg-white/10 p-1.5 transition-colors duration-200 hover:bg-primary/30">
            <button className="flex size-full items-center justify-center rounded-full bg-white">
              <PlayIcon className="size-7 text-primary" />
            </button>
          </div>
        </div>
        <div className="size-full">
          <Image
            src={`${IMAGE_URL}/${item.thumb_url}`}
            className="size-full object-cover object-center"
            alt={item?.name}
          />
          <div
            className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-full border-2 bg-black/50 text-sm font-medium backdrop-blur-md"
            style={{
              borderColor:
                item?.tmdb?.vote_average >= 7
                  ? "green"
                  : item.rate >= 5
                    ? "yellow"
                    : "red",
            }}
          >
            {item?.tmdb?.vote_average.toFixed(1)}
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link
          href={`/movie/${item?._id}`}
          className="block w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl transition-colors duration-150 hover:text-primary"
        >
          {item?.name}
        </Link>
        <Link
          href={`/get-movies-by-categories/${item?.category?.[0]?.slug || ""}`}
          className="mt-1 text-lg text-primary decoration-[1.5px] hover:underline"
        >
          {item?.category?.[0]?.name} - {item?.country?.[0]?.name}
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
