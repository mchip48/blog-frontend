import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostsIndex } from "./PostsIndex";

export function PostsIndexPage() {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleIndex = () => {
    axios.get("/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(handleIndex, []);

  const handleShow = (post) => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <PostsIndex postsProp={posts} onShow={handleShow} />
    </div>
  );
}