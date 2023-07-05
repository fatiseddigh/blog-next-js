import routerPush from "@/utils/routerPush";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const SortBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");
  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };
  const sortOptions = [
    {
      label: "most visited",
      id: "most",
    },
    {
      label: "popular",
      id: "popular",
    },
    {
      label: "newest",
      id: "newest",
    },
  ];
  return (
    <div className="bg-white rounded-3xl flex px-4">
      <div className="flex items-center gap-x-2 mr-3">
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
        <span>sorting:</span>
      </div>
      <ul className="flex items-center gap-x-4">
        {sortOptions.map(({ label, id }) => {
          return (
            <li
              className={`py-4 cursor-pointer relative ${
                id === sort ? "text-purple-600 font-bold" : "text-gray-600"
              }`}
              key={id}
              onClick={() => sortHandler(id)}
            >
              {label}
              {id === sort && (
                <span className="h-[3px] bg-purple-600 w-full rounded absolute bottom-0 left-0" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortBar;
