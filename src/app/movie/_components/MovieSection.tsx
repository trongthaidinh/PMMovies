"use client";

import MovieSwiper from "@/components/MovieSwiper";
import useGetMovieByCategories from "@/hooks/api/useGetMovieByCategories";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SwiperRef } from "swiper/react";

type Props = {
  slug: string;
  title: string;
  path?: string;
};

const MovieSection = ({ title, slug, path }: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  const { data } = useGetMovieByCategories({ slug, path });
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const mySwiper = swiperRef?.current?.swiper;

  const slideNext = () => mySwiper?.slideNext();
  const slidePrev = () => mySwiper?.slidePrev();

  useEffect(() => {
    mySwiper?.on("slideChange", function (e) {
      setIsBeginning(e.isBeginning);
      setIsEnd(e.isEnd);
    });
  }, [mySwiper]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl uppercase sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="flex items-center gap-2 sm:gap-5">
          <button
            disabled={isBeginning}
            className="flex size-8 items-center justify-center rounded-lg bg-dark-1 transition-colors duration-200 hover:bg-primary/20 disabled:pointer-events-none disabled:opacity-70 sm:size-9"
            onClick={slidePrev}
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>
          <button
            disabled={isEnd}
            className="flex size-8 items-center justify-center rounded-lg bg-dark-1 transition-colors duration-200 hover:bg-primary/20 disabled:pointer-events-none disabled:opacity-70 sm:size-9"
            onClick={slideNext}
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>
        </div>
      </div>
      <div className="mt-4 sm:mt-8">
        <MovieSwiper ref={swiperRef} list={data?.data} />
      </div>
    </div>
  );
};

export default MovieSection;
