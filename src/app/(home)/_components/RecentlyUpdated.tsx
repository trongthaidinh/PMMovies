"use client";

import MovieGrid from "@/components/MovieGrid";
import { newItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

const cats = [
  {
    id: "1",
    label: "new items",
  },
  {
    id: "2",
    label: "movies",
  },
  {
    id: "3",
    label: "tv shows",
  },
  {
    id: "4",
    label: "anime",
  },
];

const RecentlyUpdated = () => {
  const [tab, setTab] = useState(cats[0].id);

  return (
    <div>
      <div className="mt-3 flex items-center space-x-9">
        {cats.map((item) => (
          <button
            key={item.id}
            className={cn(
              "relative block h-8 uppercase transition-colors duration-100 hover:text-primary",
              {
                "text-primary": item.id === tab,
              },
            )}
            onClick={() => setTab(item.id)}
          >
            <span className="z-1 relative">{item.label}</span>
            <div
              className={cn(
                "absolute left-0 top-full h-0.5 w-full rounded-full bg-primary opacity-0",
                {
                  "opacity-100": item.id === tab,
                },
              )}
            />
          </button>
        ))}
      </div>
      <div className="mt-7">
        <MovieGrid list={newItems} />
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
