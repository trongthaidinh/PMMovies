"use client";

import useGetMovieCountries from "@/hooks/api/useGetMovieCountries";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const CountryList = () => {
  const { data: res } = useGetMovieCountries();
  const { data } = res || {};

  return (
    <div className="relative h-full w-fit cursor-pointer transition-colors duration-100 hover:text-primary [&:hover>ul]:grid [&:hover>ul]:text-white">
      <span className="flex h-full items-center gap-1">
        <span>Quốc Gia</span>
        <ChevronDown />
      </span>
      {data?.length ? (
        <ul className="absolute left-0 top-full hidden w-[400px] grid-cols-3 gap-x-3 gap-y-1 overflow-y-auto bg-dark-1 p-4">
          {data.map((item: any) => (
            <li key={item._id}>
              <Link
                href={`/quoc-gia/${item.slug}`}
                className="text-md block px-2 py-1.5 transition-colors hover:text-primary"
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

export default CountryList;
