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
  }
  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex postsProp={posts} onShow={handleShow}/>
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
