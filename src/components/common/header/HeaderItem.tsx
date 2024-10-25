import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  item: {
    label: string;
    children: {
      label: string;
      href: string;
    }[];
  };
};

const HeaderItem = ({ item }: Props) => {
  const Comp = item.children ? "div" : Link;

  return (
    <Comp
      href={item.children ? "#" : "/"}
      className="relative h-full w-fit cursor-pointer transition-colors duration-100 hover:text-primary [&:hover>ul]:block [&:hover>ul]:text-white"
    >
      <span className="flex h-full items-center gap-1">
        {item.label}
        {item.children?.length ? <ChevronDown /> : null}
      </span>
      {item?.children?.length ? (
        <ul className="absolute left-0 top-full hidden w-[240px] bg-dark-1">
          {item.children.map((item, idx) => (
            <li key={idx} className="">
              <Link
                href={item.href}
                className="block px-3 py-2 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </Comp>
  );
};

export default HeaderItem;
