import DesktopCategory from "@/components/posts/DesktopCategory";
import MobileCategory from "@/components/posts/MobileCategory";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import Layout from "@/containers/Layout";
import axios from "axios";
import queryString from "query-string";
export default function CategoryPage({ blogData, categoryData }) {
  return (
    <Layout>
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <MobileCategory categoryData={categoryData} />

        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen">
          <div className=" hidden md:block md:row-span-2 md:col-span-3">
            <DesktopCategory categoryData={categoryData} />
          </div>
          {/* sort bar desktop */}
          <div className=" hidden md:block md:col-span-9">
            <SortBar />
          </div>
          {/* blog post */}
          <div className=" md:col-span-9 grid grid-cols-6 gap-8 ">
            <PostList blogData={blogData.docs} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`,
    {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );
  const { data: dataCategory } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data } = result;
  return {
    props: { blogData: data, categoryData: dataCategory.data },
  };
}
