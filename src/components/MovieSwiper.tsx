"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./movie-card";

type Props = {
  list: any[];
};

const MovieSwiper = ({ list = [] }: Props) => {
  return (
    <Swiper spaceBetween={28} slidesPerView={5} slidesPerGroup={5}>
      {list.map((item) => (
        <SwiperSlide key={item?._id}>
          <MovieCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwiper;
