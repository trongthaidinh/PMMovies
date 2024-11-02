import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import MobileDropdown from "./MobileDropdown";
import useGetMovieCategories from "@/hooks/api/useGetMovieCategories";
import useGetMovieCountries from "@/hooks/api/useGetMovieCountries";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categoriesRes } = useGetMovieCategories();
  const { data: countriesRes } = useGetMovieCountries();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center lg:hidden"
        aria-label="Toggle menu"
      >
        <div className="relative size-6">
          <Menu
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <X
            className={`absolute transition-all duration-300 ${
              isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 top-[var(--header-height)] z-50 bg-background transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container h-[calc(100vh-var(--header-height))] overflow-y-auto py-4">
          <nav className="space-y-2">
            <Link
              href="/phim-bo"
              className="block py-2 text-lg transition-colors hover:text-primary"
              onClick={handleClose}
            >
              Phim Bộ
            </Link>
            <Link
              href="/phim-le"
              className="block py-2 text-lg transition-colors hover:text-primary"
              onClick={handleClose}
            >
              Phim Lẻ
            </Link>
            <Link
              href="/hoat-hinh"
              className="block py-2 text-lg transition-colors hover:text-primary"
              onClick={handleClose}
            >
              Hoạt Hình
            </Link>

            <MobileDropdown
              title="Thể Loại"
              baseUrl="/the-loai"
              items={categoriesRes?.data || []}
              onItemClick={handleClose}
            />

            <MobileDropdown
              title="Quốc Gia"
              baseUrl="/quoc-gia"
              items={countriesRes?.data || []}
              onItemClick={handleClose}
            />

            <Link
              href="/phim-sap-chieu"
              className="block py-2 text-lg transition-colors hover:text-primary"
              onClick={handleClose}
            >
              Sắp Chiếu
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
