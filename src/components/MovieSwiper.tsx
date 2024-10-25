"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import MovieCard from "./movie-card";
import { forwardRef } from "react";

type Props = {
  list: any[];
};

const MovieSwiper = forwardRef<SwiperRef, Props>(({ list = [] }, ref) => {
  return (
    <Swiper ref={ref} spaceBetween={28} slidesPerView={5} slidesPerGroup={5}>
      {list.map((item) => (
        <SwiperSlide key={item?._id}>
          <MovieCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default MovieSwiper;
