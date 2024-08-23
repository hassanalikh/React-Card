import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostListContext);
  
  // Destructure likes and dislikes from reactions if they exist
  const { likes, dislikes } = post.reactions || {};

  return (
    <div className="card my-Card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.hashTag && post.hashTag.map((tag, index) => (
          <span key={index} className="badge text-bg-primary my-Tag">{tag}</span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          Post Reactions: Likes - {likes}, Dislikes - {dislikes}
        </div>
      </div>
    </div>
  );
}

export default Post;
