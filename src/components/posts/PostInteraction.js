import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import {
  BookmarkIcon as SolidBookmark,
  HeartIcon as SolidHearIcon,
} from "@heroicons/react/24/solid";

const PostInteraction = ({ post, isSmall, className }) => {
  const iconSize = isSmall ? "h-4 w-4" : "h-6 w-6";
  const numberSize = isSmall ? "text-xs" : "text-base";

  return (
    <div
      className={`flex items-center ${
        isSmall ? "gap-x-2" : "gap-x-4"
      } ${className}`}
    >
      <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1">
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