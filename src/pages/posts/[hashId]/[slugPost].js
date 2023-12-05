import PostInteraction from "@/components/posts/PostInteraction";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmark } from "@heroicons/react/24/solid";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";
import PostList from "@/components/posts/PostList";
import PostComments from "@/components/posts/postComments";
import Layout from "@/containers/Layout";
import http from "@/services/httpService";

const PostPAge = ({ postData }) => {
  const [copied, setCopied] = useState(false);
  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <Layout>
      <div className="md:max-w-screen-lg container mx-auto py-4">
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
        <section>
          <ul className="flex items-center flex-wrap  gap-x-4 mb-6">
            {["React.js", "javaScript", "front end", "Next.js"].map(
              (tag, index) => {
                return (
                  <li
                    key={index}
                    className="px-3 py-1 rounded-2xl bg-purple-100 hover:bg-purple-200 transition-all  cursor-pointer text-purple-900 tex-sm mb-3 block"
                  >
                    {tag}
                  </li>
                );
              }
            )}
          </ul>
          <div className="flex items-center flex-col gap-y-8 md:flex-row md:justify-between">
            <PostInteraction
              post={postData}
              className="justify-evenly w-full md:w-auto"
            />
            {/* share btns */}
            <div className="flex items-center gap-x-6 justify-around  w-full md:w-auto mb-8">
              <div className="flex items-center md:gap-x-4 gap-x-6 md:w-auto">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${postData.hashId}/${postData.slug}`}
                  target="_blank"
                  className="block"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin
                    size={30}
                    className="fill-purple-200 hover:fill-purple-300 transition-all duration-300 cursor-pointer"
                  />
                </a>
                <a
                  href={`https://twitter.com/share?text=${postData.title}&url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${postData.hashId}/${postData.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <IoLogoTwitter
                    size={24}
                    className="fill-purple-200 hover:fill-purple-300 transition-all duration-300 cursor-pointer"
                  />
                </a>
                <a
                  className="block"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${postData.hashId}/${postData.slug}&text=${postData.title}`}
                >
                  <FaTelegram
                    className="fill-purple-200 hover:fill-purple-300 transition-all duration-300 cursor-pointer"
                    size={24}
                  />
                </a>
              </div>
              <div className="relative">
                <CopyToClipboard
                  text={`${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${postData.hashId}/${postData.slug}`}
                  onCopy={copyHandler}
                >
                  <div className="bg-purple-100 border px-3 py-1 rounded-2xl text-purple-900 flex items-center gap-x-2 cursor-pointer ">
                    <span className="text-sm md:text-base">copy&nbsp;link</span>
                    <MdContentCopy size={24} />
                  </div>
                </CopyToClipboard>
                {copied && (
                  <span className="absolute -top-8 left-0 bg-blue-500 px-3 py-1 rounded-2xl text-white text-sm">
                    copied
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-500 rounded w-full mb-8"></div>
        </section>
        {/* related posts */}
        <section className="mb-20">
          <h2 className="font-extrabold text-2xl md:text-3xl mb-8">
            related posts
          </h2>
          {postData.related.length ? (
            <div className="grid grid-cols-6 gap-10">
              <PostList blogData={postData.related} />
            </div>
          ) : (
            <h3 className="text-center text-red-500 font-bold">
              post not found!!
            </h3>
          )}
        </section>
        {/* post comments */}
        <PostComments post={postData} />
      </div>
      <div className="h-32 bg-white"></div>
    </Layout>
  );
};

export default PostPAge;
export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const {
    data: { data },
  } = await http.get(`/posts/${query.slugPost}`, {
    headers: {
      Cookie: req.headers.cookie || "",
    },
  });
  return {
    props: {
      postData: data,
    },
  };
}
