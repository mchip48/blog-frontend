import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function PostsPage() {

   // where all the data comes from
  // prop - how we get data from one component to the next
  // we'll be using a 3rd party library called axios to make requests to our backend
  // react state 
  // useState - react hook

  const [posts, setPosts] = useState([]);
  // special state variable - recipes
  // function to update the state variable - setRecipes

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    })
  }

  const handleShow = (post) => {
    console.log("handleShow", post)
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  }

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});


  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex postsProp={posts} onShow={handleShow}/>
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
        <h2>Title: {currentPost.title}</h2>
        <img src={currentPost.image}></img>
        <p>Description: {currentPost.body}</p>
      </Modal>
    </div>
  );
}
