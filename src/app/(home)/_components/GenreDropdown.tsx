"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GenreDropdownProps {
  cats: { _id: string; name: string; slug: string }[];
  setSlug: (slug: string) => void;
  setTabIdx: (index: number) => void;
}

const GenreDropdown: React.FC<GenreDropdownProps> = ({
  cats,
  setSlug,
  setTabIdx,
}) => {
  const [selectedGenre, setSelectedGenre] = useState(cats[0]?.name || "");

  useEffect(() => {
    if (cats.length > 0) {
      setSelectedGenre(cats[0].name);
      setSlug(cats[0].slug);
      setTabIdx(0);
    }
  }, [cats, setSlug, setTabIdx]);

  const handleSelect = (index: number) => {
    setTabIdx(index);
    setSlug(cats[index]?.slug || "");
    setSelectedGenre(cats[index]?.name || "");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center">
        <div className="flex items-center rounded-lg border border-primary px-4 py-2 transition-colors duration-200 hover:bg-primary/10">
          <p className="whitespace-nowrap">{selectedGenre}</p>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[200px] rounded-lg bg-dark-1 !outline-none"
        align="start"
      >
        {cats.map((cat, index) => (
          <DropdownMenuItem key={cat._id} onClick={() => handleSelect(index)}>
            {cat.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
