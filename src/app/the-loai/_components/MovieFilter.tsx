"use client";

import { Select } from "@/components/ui/select";
import useGetMovieCategories from "@/hooks/api/useGetMovieCategories";
import useGetMovieCountries from "@/hooks/api/useGetMovieCountries";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  sortOptions,
  typeOptions,
  yearOptions,
} from "@/constants/filter-options";
import { useDebounce } from "@/hooks/useDebounce";

interface FilterValues {
  sort: string;
  type: string;
  category: string;
  country: string;
  year: string;
}

interface Props {
  onFilterChange: (values: FilterValues) => void;
  currentCategory?: string;
}

export default function MovieFilter({
  onFilterChange,
  currentCategory,
}: Props) {
  const [filters, setFilters] = useState<FilterValues>(() => ({
    sort: "",
    type: "",
    category: currentCategory || "",
    country: "",
    year: "",
  }));

  const { data: categoriesRes } = useGetMovieCategories();
  const { data: countriesRes } = useGetMovieCountries();

  const categoryOptions = useMemo(
    () =>
      (categoriesRes?.data || []).map((cat: any) => ({
        value: cat.slug,
        label: cat.name,
      })),
    [categoriesRes?.data],
  );

  const countryOptions = useMemo(
    () =>
      (countriesRes?.data || []).map((country: any) => ({
        value: country.slug,
        label: country.name,
      })),
    [countriesRes?.data],
  );

  const debouncedFilters = useDebounce(filters, 500);

  const handleFilterChange = useCallback(
    (name: keyof FilterValues, value: string) => {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  useEffect(() => {
    onFilterChange(debouncedFilters);
  }, [debouncedFilters, onFilterChange]);

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <Select
        value={filters.sort}
        onChange={(value) => handleFilterChange("sort", value)}
        options={sortOptions}
        placeholder="Sắp xếp theo"
      />

      <Select
        value={filters.type}
        onChange={(value) => handleFilterChange("type", value)}
        options={typeOptions}
        placeholder="Loại phim"
      />

      <Select
        value={filters.category}
        onChange={(value) => handleFilterChange("category", value)}
        options={categoryOptions}
        placeholder="Thể loại"
      />

      <Select
        value={filters.country}
        onChange={(value) => handleFilterChange("country", value)}
        options={countryOptions}
        placeholder="Quốc gia"
      />

      <Select
        value={filters.year}
        onChange={(value) => handleFilterChange("year", value)}
        options={yearOptions}
        placeholder="Năm phát hành"
      />
    </div>
  );
}
