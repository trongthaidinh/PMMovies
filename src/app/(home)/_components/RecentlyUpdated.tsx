"use client";

import MovieGrid from "@/components/MovieGrid";
import useGetMovieByCategories from "@/hooks/api/useGetMovieByCategories";
import useGetMovieCategories from "@/hooks/api/useGetMovieCategories";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RecentlyUpdated = () => {
  const { data: res } = useGetMovieCategories();

  const [slug, setSlug] = useState("");
  const { data: movieListData } = useGetMovieByCategories(slug);

  const [cats, setCats] = useState([
    {
      _id: "",
      name: "",
      slug: "",
    },
  ]);
  const [tabIdx, setTabIdx] = useState(0);
  const { data } = res || {};

  useEffect(() => {
    if (data) {
      setCats(data.splice(0, 5));
    }
  }, [data]);

  useEffect(() => {
    const catChosen = cats[tabIdx];
    if (catChosen) {
      setSlug(catChosen.slug || "");
    }
  }, [cats, tabIdx]);

  return (
    <div>
      <div className="mt-3 flex items-center space-x-9">
        {cats.map((item, idx) => (
          <button
            key={item?._id}
            className={cn(
              "relative block h-8 uppercase transition-colors duration-100 hover:text-primary",
              {
                "text-primary": tabIdx === idx,
              },
            )}
            onClick={() => setTabIdx(idx)}
          >
            <span className="z-1 relative">{item?.name}</span>
            <div
              className={cn(
                "absolute left-0 top-full h-0.5 w-full rounded-full bg-primary opacity-0",
                {
                  "opacity-100": tabIdx === idx,
                },
              )}
            />
          </button>
        ))}
      </div>
      <div className="mt-7">
        <MovieGrid list={movieListData?.data} />
      </div>
      <Link
        href="#"
        className="hover:bg-primary/10 mx-auto mt-12 flex w-fit cursor-pointer items-center justify-center rounded-lg border border-primary px-8 py-3 uppercase transition-colors duration-200"
      >
        view all
      </Link>
    </div>
  );
};

export default RecentlyUpdated;
