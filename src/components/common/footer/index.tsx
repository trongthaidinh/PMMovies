"use client";

import { Facebook, Instagram, MoveUp, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Phim Bộ", href: "/phim-bo" },
  { label: "Phim Lẻ", href: "/phim-le" },
  { label: "Hoạt Hình", href: "/hoat-hinh" },
  { label: "Sắp Chiếu", href: "/phim-sap-chieu" },
];

const genres = [
  { label: "Hành Động", href: "/the-loai/hanh-dong" },
  { label: "Tình Cảm", href: "/the-loai/tinh-cam" },
  { label: "Hài Hước", href: "/the-loai/hai-huoc" },
  { label: "Kinh Dị", href: "/the-loai/kinh-di" },
];

const legal = [
  { label: "Điều khoản sử dụng", href: "/terms" },
  { label: "Chính sách bảo mật", href: "/privacy" },
  { label: "Về chúng tôi", href: "/about" },
  { label: "Liên hệ", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-dark-2 mt-16 border-t border-t-dark-1">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={80}
                height={80}
                priority
              />
            </Link>
            <p className="text-sm text-gray-400">
              Trang web xem phim trực tuyến hàng đầu Việt Nam với kho phim đa
              dạng và chất lượng cao.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    className="text-gray-400 transition-colors hover:text-primary"
                  >
                    <Icon className="size-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-center font-medium md:text-left">
              Danh Mục
            </h3>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {categories.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="mb-4 text-center font-medium md:text-left">
              Thể Loại
            </h3>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {genres.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-center font-medium md:text-left">
              Thông Tin
            </h3>
            <ul className="flex flex-col items-center gap-2 md:items-start">
              {legal.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse items-center gap-4 border-t border-dark-1 py-6 md:flex-row md:justify-between">
          <span className="text-sm text-gray-400">
            © 2024 PMMovies. All rights reserved.
          </span>
          <button
            className="flex size-10 items-center justify-center rounded-md border-2 border-primary transition-colors hover:bg-primary/10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <MoveUp className="size-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
