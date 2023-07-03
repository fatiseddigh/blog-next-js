import React from "react";
import SingleComment from "./SingleComment";

const ReplyComment = ({ parentCommentId, comments, postId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="ml-2 md:ml-5" key={comment._id}>
          <React.Fragment key={comment._id}>
            <SingleComment comment={comment} postId={postId} />
            <ReplyComment
              comments={comments}
              parentCommentId={comment._id}
              postId={postId}
            />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
