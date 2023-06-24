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
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
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
          <div className=" md:col-span-9 grid grid-cols-6 gap-8 ">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
              return (
                <div
                  key={index}
                  className="col-span-6 md:col-span-3 lg-col-span-2 bg-white flex flex-col rounded-3xl p-4"
                >
                  <div className="aspect-w-16 aspect-h-9 ">
                    <img
                      src="/images/next.jpg"
                      alt=""
                      className=" rounded-2xl h-44 w-ful h-full object-center object-cover "
                    />
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 mt-3 flex flex-col w-full justify-between flex-1">
                    <h2 className="mb-4 font-bold">
                      {index !== 2
                        ? " this title"
                        : " this is dfgdgdgdgdg fgdgdgdgdg dfgdgdgdgdgdf dtittdsggdgdffgdgle"}
                    </h2>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/images/next.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full ring-2 ring-white mr-2"
                        />
                        <span className="text-sm ">fateme seddigh</span>
                      </div>
                      <span className="text-xs px-2 py-1 cursor-pointer rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300">
                        react
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
