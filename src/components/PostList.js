import React, { useContext } from 'react';
import Post from './Post';
import { PostListContext } from '../store/post-list-store';
import Message from './Message';

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListContext);

  const handleToGetPost = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
      })
  };
  console.log("postlist ", postList)

  return (
    <div className="postlist">
      {postList && postList.length === 0 && (<Message handleToGetPost={handleToGetPost} />)}
      {postList.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
