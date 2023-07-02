import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const SortBar = () => {
  return (
    <div className="bg-white rounded-3xl flex px-4">
      <div className="flex items-center gap-x-2 mr-3">
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
        <span>sorting:</span>
      </div>
      <ul className="flex items-center gap-x-4">
        <li className="py-4 text-gray-600 cursor-pointer ">most visited</li>
        <li className="py-4 text-gray-600 cursor-pointer">favorites</li>
        <li className="py-4 text-gray-600 cursor-pointer">newest</li>
      </ul>
    </div>
  );
};

export default SortBar;
