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

  const handleCreate = (params) => {
    console.log("handleCreate");
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      // spread operator
      setPosts([...posts, response.data]);
    })
  }

  const handleUpdate = (post, params) => {
    console.log("handleUpdate");
    axios.patch("http://localhost:3000/posts/" + post.id + ".json", params).then((response) => {
      setPosts(posts.map(p => p.id === response.data.id ? response.data : p));
      setIsPostsShowVisible(false);
    });
  };

  const handleDestroy = (post) => {
    console.log("handleDestroy", post)
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      console.log(response.data);
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