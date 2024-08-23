import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTilteElement = useRef();
  const postContentElement = useRef();
  const postReactionElement = useRef();
  const postTagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTilte = postTilteElement.current.value;
    const postBody = postContentElement.current.value;
    const reaction = postReactionElement.current.value;
    const tags = postTagElement.current.value.split(" ");

    // Clear the input fields by setting their value properties to an empty string
    userIdElement.current.value = "";
    postTilteElement.current.value = "";
    postContentElement.current.value = "";
    postReactionElement.current.value = "";
    postTagElement.current.value = "";

    addPost(userId, postTilte, postBody, reaction, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User Id</label>
        <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter your user-Id " />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" ref={postTilteElement} className="form-control" id="title" placeholder="How are you feeling today?" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea ref={postContentElement} className="form-control" id="body" placeholder="Tell us more about it" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Post Reaction</label>
        <textarea ref={postReactionElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Post Tags</label>
        <textarea ref={postTagElement} className="form-control" id="tags" placeholder="Mention tags with spaces" />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
}

export default CreatePost;
