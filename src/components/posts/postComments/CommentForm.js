import { useState } from "react";

const CommentForm = ({ postId, responseTo, setOnreply }) => {
  const [commentValue, setCommentValue] = useState("");
  return (
    <form>
      <textarea
        className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-purple-700 focus:ring-2"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder=" send your comment"
      />
      <button
        className="mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-700 rounded-2xl text-white px-3 md:text-lg"
        // onClick={submitHandler}
      >
        send comment
      </button>
    </form>
  );
};

export default CommentForm;
