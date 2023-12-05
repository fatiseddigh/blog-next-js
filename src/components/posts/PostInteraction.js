import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import {
  BookmarkIcon as SolidBookmark,
  HeartIcon as SolidHearIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const PostInteraction = ({ post, isSmall, className }) => {
  const router = useRouter();
  const likeHandler = (id) => {
    http
      .put(`/posts/like/${id}`)
      .then(({ data }) => {
        routerPush(router);
        toast.success(data.message);
      })
      .catch((err) => toast.error("error"));
  };
  const bookmarkHandler = (id) => {
    http
      .put(`/posts/bookmark/${id}`)
      .then(({ data }) => {
        routerPush(router);
        toast.success(data.message);
      })
      .catch((err) => toast.error("error"));
  };
  const iconSize = isSmall ? "h-4 w-4" : "h-6 w-6";
  const numberSize = isSmall ? "text-xs" : "text-base";
  return (
    <div
      className={`flex items-center ${
        isSmall ? "gap-x-2" : "gap-x-4"
      } ${className}`}
    >
      <button className="bg-purple-200 p-0.5 rounded flex items-center gap-x-1">
        <ChatBubbleBottomCenterTextIcon
          className={`${iconSize} stroke-gray-500`}
        />
        <span className={`${numberSize} text-gray-500 font-bold leading-3`}>
          {post.commentsCount}
        </span>
      </button>
      <button
        className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500
      hover:bg-red-500 hover:text-red-100 transition-all  
      "
        onClick={() => likeHandler(post._id)}
      >
        {post.isLiked ? (
          <SolidHearIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-fill-current`} />
        )}
        <span className={`${numberSize} block font-bold leading-3`}>
          {post.likesCount}
        </span>
      </button>
      <button
        className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1
      hover:bg-blue-500 hover:text-white transition-all"
        onClick={() => bookmarkHandler(post._id)}
      >
        {post.isBookmarked ? (
          <SolidBookmark className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}
      </button>
    </div>
  );
};

export default PostInteraction;
