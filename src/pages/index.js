import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
          <div className=" hidden md:block md:row-span-2 md:col-span-3">
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
                <Link
                  href="#"
                  className="block py-1 pl-3 mb-1 hover:bg-purple-100"
                >
                  all article
                </Link>
                <Link
                  href="#"
                  className="block py-1 pl-3 mb-1 hover:bg-purple-100"
                >
                  one article
                </Link>
                <Link href="#" className="block py-1 pl-3  hover:bg-purple-100">
                  two article
                </Link>
              </div>
            </div>
          </div>
          <div className=" hidden md:block md:col-span-9">
            <div className="bg-white rounded-3xl flex px-4">
              <div className="flex items-center gap-x-2 mr-3">
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                <span>sorting:</span>
              </div>
              <ul className="flex items-center gap-x-4">
                <li className="py-4 text-gray-600 cursor-pointer ">
                  most visited
                </li>
                <li className="py-4 text-gray-600 cursor-pointer">favorites</li>
                <li className="py-4 text-gray-600 cursor-pointer">newest</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-200 md:col-span-9">blogs desktop</div>
        </div>
      </div>
    </div>
  );
}
