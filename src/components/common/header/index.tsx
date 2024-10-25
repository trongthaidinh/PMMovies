import React from "react";
import LogoHeader from "./LogoHeader";
import HeaderItem from "./HeaderItem";
import { Search } from "lucide-react";
import UserBox from "./UserBox";

const list = [
  {
    label: "Categories",
    children: [
      {
        label: "Action",
        href: "#",
      },
      {
        label: "Comedy",
        href: "#",
      },
      {
        label: "Drama",
        href: "#",
      },
    ],
  },
];

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] flex h-[var(--header-height)] items-center border-b border-dark-1">
      <div className="container flex h-10 items-center justify-between gap-8">
        <LogoHeader className="mr-4" />
        <ul className="h-full flex-1">
          {list.map((item, idx) => (
            <li key={idx} className="h-full">
              <HeaderItem item={item} />
            </li>
          ))}
        </ul>
        <div className="mr-8 flex h-full items-center overflow-hidden rounded-lg bg-dark-1 px-5">
          <input
            className="h-full flex-1 border-none bg-transparent outline-none"
            placeholder="Search..."
          />
          <Search className="size-4" />
        </div>
        <UserBox />
      </div>
    </header>
  );
};

export default Header;
