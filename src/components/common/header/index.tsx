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
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
      setShowSearch(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] flex h-[var(--header-height)] items-center border-b border-dark-1 bg-background">
      <div className="container flex h-10 items-center justify-between gap-4">
        {/* Mobile Layout */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <MobileMenu />
          <LogoHeader className="absolute left-1/2 -translate-x-1/2" />
          <div className="flex items-center gap-4">
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search className="size-6" />
            </button>
            {!isLoading && user && <UserBox />}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden w-full items-center gap-4 lg:flex">
          <LogoHeader />
          <ul className="flex h-full flex-1 items-center gap-6">
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
                href="/phim-sap-chieu"
                className="flex h-full items-center transition-colors duration-100 hover:text-primary"
              >
                Sắp Chiếu
              </Link>
            </li>
          </ul>

          <form
            onSubmit={handleSearch}
            className="flex h-full items-center overflow-hidden rounded-lg bg-dark-1 px-5"
          >
            <input
              className="h-full w-[200px] border-none bg-transparent py-2 text-base outline-none"
              placeholder="Tìm kiếm..."
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

        {/* Mobile Search Overlay */}
        {showSearch && (
          <div className="absolute inset-x-0 top-full bg-background p-4 lg:hidden">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                className="flex-1 rounded-lg bg-dark-1 px-4 py-2 outline-none"
                placeholder="Tìm kiếm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                autoFocus
              />
              <button type="submit" className="rounded-lg bg-primary px-4 py-3">
                <Search className="size-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
