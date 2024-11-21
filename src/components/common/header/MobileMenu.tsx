import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import useGetMovieCategories from "@/hooks/api/useGetMovieCategories";
import useGetMovieCountries from "@/hooks/api/useGetMovieCountries";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
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

            <div className="border-b border-dark-1">
              <button
                className="flex w-full items-center justify-between py-2 text-lg"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span>Thể Loại</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isCategoryOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-2 py-2">
                  {categoriesRes?.data?.map((item: any) => (
                    <Link
                      key={item._id}
                      href={`/the-loai/${item.slug}`}
                      className="block px-4 py-2 text-gray-300 transition-colors hover:text-primary"
                      onClick={handleClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-b border-dark-1">
              <button
                className="flex w-full items-center justify-between py-2 text-lg"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
              >
                <span>Quốc Gia</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isCountryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isCountryOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-2 py-2">
                  {countriesRes?.data?.map((item: any) => (
                    <Link
                      key={item._id}
                      href={`/quoc-gia/${item.slug}`}
                      className="block px-4 py-2 text-gray-300 transition-colors hover:text-primary"
                      onClick={handleClose}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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
