import Link from "next/link";

const MobileCategory = ({ categoryData }) => {
  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-4">
      <Link
        href="/blogs"
        className="block border border-gray-500 text-gray-500 bg-white
                  rounded-3xl px-3 py-1 whitespace-nowrap "
      >
        all article
      </Link>
      {categoryData.map((category) => {
        return (
          <Link
            href={`/blogs/${category.englishTitle}`}
            className="block border border-gray-500 text-gray-500 bg-white
                  rounded-3xl px-3 py-1 whitespace-nowrap "
            key={category._id}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileCategory;
