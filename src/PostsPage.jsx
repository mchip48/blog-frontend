import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

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
    axios.get("/posts.json").then((response) => {
      setPosts(response.data);
    })
  }
  
  const handleShow = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  }
  
  const handleCreate = (params) => {
    axios.post("/posts.json", params).then((response) => {
      // spread operator
      setPosts([...posts, response.data]);
    })
  }
  
  const handleUpdate = (post, params) => {
    axios.patch("/posts/" + post.id + ".json", params).then((response) => {
      setPosts(posts.map(p => p.id === response.data.id ? response.data : p));
      setIsPostsShowVisible(false);
    });
  };
  
  const handleDestroy = (post) => {
    axios.delete(`/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter(p => p.id !== post.id));
      setIsPostsShowVisible(false);
    });
  };
  
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  
  
  useEffect(handleIndex, []);
  
  return (
    <div>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex postsProp={posts} onShow={handleShow}/>
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
        <PostsShow post={currentPost} onUpdate={handleUpdate} onDestroy={handleDestroy}/>
      </Modal>
    </div>
  );
}

// Line 22: console.log(response.data);
// Line 27: console.log("handleShow", post)
// Line 32: console.log("handleCreate");
// Line 33: console.log(response.data);
// Line 34: spread operator
// Line 38: console.log("handleUpdate");
// Line 45: console.log("handleDestroy", post)
// Line 46: console.log(response.data);