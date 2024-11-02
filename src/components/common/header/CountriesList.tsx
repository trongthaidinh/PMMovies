"use client";

import useGetMovieCountries from "@/hooks/api/useGetMovieCountries";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const CountriesList = () => {
  const { data: res } = useGetMovieCountries();
  const { data } = res || {};

  return (
    <div className="relative h-full w-fit cursor-pointer transition-colors duration-100 hover:text-primary [&:hover>ul]:grid [&:hover>ul]:text-white">
      <span className="flex h-full items-center gap-1">
        <span>Quốc Gia</span>
        <ChevronDown />
      </span>
      {data?.length ? (
        <ul className="absolute left-0 top-full hidden w-[300px] grid-cols-2 gap-x-3 gap-y-1 overflow-y-auto bg-dark-1 px-3 py-2">
          {data.map((item: any) => (
            <li key={item._id}>
              <Link
                href={`/quoc-gia/${item.slug}`}
                className="block px-3 py-2 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CountriesList;
