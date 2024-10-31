"use client";

import useGetMovieCategories from "@/hooks/api/useGetMovieCategories";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const CategoriesList = () => {
  const { data: res } = useGetMovieCategories();
  const { data } = res || {};

  return (
    <div className="relative h-full w-fit cursor-pointer transition-colors duration-100 hover:text-primary [&:hover>ul]:grid [&:hover>ul]:text-white">
      <span className="flex h-full items-center gap-1">
        <span>Thể Loại</span>
        <ChevronDown />
      </span>
      {data?.length ? (
        <ul className="absolute left-0 top-full hidden w-[300px] grid-cols-2 gap-x-3 gap-y-1 overflow-y-auto bg-dark-1 px-3 py-2">
          {data.map((item: any) => (
            <li key={item._id} className="">
              <Link
                href={`/the-loai/${item.slug}`}
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

export default CategoriesList;
