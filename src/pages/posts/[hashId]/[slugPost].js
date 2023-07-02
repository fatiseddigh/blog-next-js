import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmark } from "@heroicons/react/24/solid";

import axios from "axios";
import Link from "next/link";

const PostPAge = ({ postData }) => {
  console.log(postData);
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="md:max-w-screen-lg container mx-auto">
        <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 mx-auto max-w-screen-md">
          {/* author data */}
          <div className="flex items-stretch">
            <img
              className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white"
              src="/images/fati.jpg"
              alt={postData.author.name}
            />
            <div className="flex flex-col ml-4 justify-between">
              <div>
                <span className="font-extrabold text-base">
                  {postData.author.name}
                </span>
                <Link
                  href={`/blogs/${postData.category.englishTitle}`}
                  className="bg-white border border-blue-500 text-xs text-blue-500 px-3 py-1 ml-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white  "
                >
                  {postData.category.title}
                </Link>
              </div>
              <span className="font-normal text-xs hidden md:block">
                {postData.author.biography}
              </span>

              <div className="font-normal text-myGray-400 text-sm ">
                <span>
                  {new Date(postData.createdAt).toLocaleDateString("en")}
                </span>
                <span className="mx-1"> &bull;</span>
                <span>
                  <span> reading time</span>
                  <span> {postData.readingTime} </span>
                  <span>min </span>
                </span>
              </div>
            </div>
          </div>
          {/* interactions buttons */}
          <div className="flex">
            <button>
              <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer " />
            </button>
            <button className="ml-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
              <span className="mr-1 text-xs ">
                {postData.isBookmarked ? "saved" : "save"}
              </span>
              {postData.isBookmarked ? (
                <SolidBookmark className="h-6 w-6 fill-blue-600" />
              ) : (
                <BookmarkIcon className="h-6 w-6 stroke-current" />
              )}
            </button>
          </div>
        </header>
        <main
          className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl  prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10
        prose-img:rounded-xl prose-a:text-blue-500 mb-8 max-w-screen-md  mx-auto
        "
        >
          <h1>{postData.title}</h1>
          <h2> first test title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non
            nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
            scelerisque fermentum. Odio ut enim blandit volutpat maecenas
            volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi
            vitae suscipit tellus mauris a diam maecenas sed. Placerat duis
            ultricies lacus sed turpis tincidunt id aliquet.
          </p>
          <img src={postData.coverImage} alt="" />
          <h2> Second title </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium viverra
            suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non
            nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis
            scelerisque fermentum. Odio ut enim blandit volutpat maecenas
            volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi
            vitae suscipit tellus mauris a diam maecenas sed. Placerat duis
            ultricies lacus sed turpis tincidunt id aliquet.{" "}
          </p>
          <h2> how to config tailwind</h2>
          <p>
            <a href="https://highlightjs.org/">highlight.js</a>{" "}
          </p>
          <p>
            for example : use this file in your project
            <code>tailwind.config.js</code>
          </p>
          <pre dir="ltr">{`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
`}</pre>
        </main>
      </div>
    </div>
  );
};

export default PostPAge;
export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.slugPost}`);
  return {
    props: {
      postData: data,
    },
  };
}