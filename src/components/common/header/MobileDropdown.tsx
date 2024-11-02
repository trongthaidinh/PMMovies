import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Props = {
  title: string;
  items: Array<{
    _id: string;
    name: string;
    slug: string;
  }>;
  baseUrl: string;
  onItemClick?: () => void;
};

const MobileDropdown = ({ title, items, baseUrl, onItemClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  return (
    <div className="border-b border-dark-1">
      <button
        className="flex w-full items-center justify-between py-2 text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px]" : "max-h-0"}`}
      >
        <ul className="space-y-2 py-2">
          {items?.map((item) => (
            <li key={item._id}>
              <Link
                href={`${baseUrl}/${item.slug}`}
                className="block px-4 py-2 text-gray-300 transition-colors hover:text-primary"
                onClick={handleItemClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileDropdown;
