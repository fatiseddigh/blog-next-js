import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CommentForm = ({ postId, responseTo, setOnReply }) => {
  const [commentValue, setCommentValue] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      content: commentValue,
      postId,
      responseTo,
    };
    http
      .post("/post-comment/save-comment", data)
      .then(({ data }) => {
        setCommentValue("");
        if (setOnReply) setOnReply((open) => !open);
        toast.success("Thanks for comment");
        routerPush(router);
      })
      .catch((err) => toast.error("error"));
  };
  return (
    <form>
      <textarea
        className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-purple-700 focus:ring-2"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder=" send your comment"
      />
      <button
        className="mt-4 mx-auto py-3 w-full sm:w-56 bg-purple-700 rounded-2xl text-white px-3 md:text-lg"
        onClick={submitHandler}
      >
        send comment
      </button>
    </form>
  );
};

export default CommentForm;
