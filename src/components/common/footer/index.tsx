"use client";

import { MoveUp } from "lucide-react";
import Link from "next/link";

const list = [
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="border-t border-t-dark-1">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="#" className="text-4xl">
            LOGO
          </Link>
          <span className="text-xs">© LOGO, 2024</span>
        </div>
        <div className="flex items-center">
          <ul className="mr-9 flex items-center gap-9">
            {list.map((item, idx) => (
              <li key={idx}>
                <Link key={idx} href={item.href} className="text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="flex size-10 items-center justify-center rounded-md border-2 border-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <MoveUp className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
