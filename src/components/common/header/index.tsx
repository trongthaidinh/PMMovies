"use client";

import LogoHeader from "./LogoHeader";
import { Search } from "lucide-react";
import UserBox from "./UserBox";
import CategoriesList from "./CategoriesList";
import CountryList from "./CountryList";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] flex h-[var(--header-height)] items-center border-b border-dark-1 bg-background">
      <div className="container flex h-10 items-center justify-between gap-4 md:gap-8">
        <LogoHeader className="mr-4" />
        <ul className="hidden h-full flex-1 items-center gap-6 md:flex">
          <li>
            <Link
              href="/phim-bo"
              className="flex h-full items-center transition-colors duration-100 hover:text-primary"
            >
              Phim Bộ
            </Link>
          </li>
          <li>
            <Link
              href="/phim-le"
              className="flex h-full items-center transition-colors duration-100 hover:text-primary"
            >
              Phim Lẻ
            </Link>
          </li>
          <li>
            <Link
              href="/hoat-hinh"
              className="flex h-full items-center transition-colors duration-100 hover:text-primary"
            >
              Hoạt Hình
            </Link>
          </li>
          <li>
            <CategoriesList />
          </li>
          <li>
            <CountryList />
          </li>
          <li>
            <Link
              href="/sap-chieu"
              className="flex h-full items-center transition-colors duration-100 hover:text-primary"
            >
              Sắp Chiếu
            </Link>
          </li>
        </ul>
        <form
          onSubmit={handleSearch}
          className="mr-0 flex h-full w-full items-center overflow-hidden rounded-lg bg-dark-1 px-3 md:mr-8 md:w-auto md:px-5"
        >
          <input
            className="h-full w-full flex-1 border-none bg-transparent text-sm outline-none md:text-base"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">
            <Search className="size-4" />
          </button>
        </form>
        <div className="flex items-center gap-4">
          {!isLoading && (user ? <UserBox /> : <AuthButtons />)}
        </div>
      </div>
    </header>
  );
};

export default Header;
