import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const DesktopCategory = ({ categoryData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl mt-2 overflow-hidden">
      {/*  accordion header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-purple-200  py-5 px-2 cursor-pointer"
      >
        <span> article sorting </span>
        <ChevronDownIcon
          className={`w-6 h-6 stroke-purple-400 transition-all duration-200  ${
            isOpen ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>
      {/* accordion body */}
      <div className={` ${isOpen ? "block" : "hidden"}`}>
        <Link href="#" className="block py-1 pl-3 mb-1 hover:bg-purple-100">
          all article
        </Link>
        {categoryData.map((category) => {
          return (
            <Link
              href={`/blogs/${category.englishTitle}`}
              className="block py-1 pl-3  hover:bg-purple-100"
              key={category._id}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopCategory;
