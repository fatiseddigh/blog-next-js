import Link from "next/link";
import { useRouter } from "next/router";

const MobileCategory = ({ categoryData }) => {
  const { query } = useRouter();

  return (
    <div className="flex md:hidden gap-x-4 overflow-auto pb-4">
      <Link
        href="/blogs"
        className={`block border border-gray-500 text-gray-500 bg-white
                  rounded-3xl px-3 py-1 whitespace-nowrap ${
                    !query.categorySlug
                      ? "border-purple-700 text-purple-700 bg-purple-100 border-2"
                      : ""
                  }`}
      >
        all article
      </Link>
      {categoryData.map((category) => {
        return (
          <Link
            href={`/blogs/${category.englishTitle}`}
            className={`block border border-gray-500 text-gray-500 bg-white
                  rounded-3xl px-3 py-1 whitespace-nowrap ${
                    query.categorySlug === category.englishTitle
                      ? "border-purple-700 text-purple-700 bg-purple-100 border-2"
                      : ""
                  }`}
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
