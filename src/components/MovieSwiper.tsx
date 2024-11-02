"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import MovieCard from "./movie-card";
import { forwardRef } from "react";

type Props = {
  list: any[];
};

const MovieSwiper = forwardRef<SwiperRef, Props>(({ list = [] }, ref) => {
  return (
    <Swiper
      ref={ref}
      spaceBetween={20}
      slidesPerView={4}
      slidesPerGroup={4}
      watchOverflow={true}
      breakpoints={{
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        320: { slidesPerView: 1, slidesPerGroup: 1 },
        480: { slidesPerView: 2, slidesPerGroup: 2 },
        768: { slidesPerView: 3, slidesPerGroup: 3 },
        1024: { slidesPerView: 4, slidesPerGroup: 4 },
      }}
    >
      {list.map((item) => (
        <SwiperSlide key={item?._id}>
          <MovieCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default MovieSwiper;
