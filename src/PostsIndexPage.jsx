import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostsIndex } from "./PostsIndex";

export function PostsIndexPage() {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  const handleIndex = (filterTag = "") => {
    axios.get(`/posts.json?tag=${filterTag}`).then((response) => {
      setPosts(response.data);
    });
  };

  const handleIndexTags = () => {
    axios.get("/tags.json").then((response) => {
      setAllTags(response.data)
    });
  };

  const handleFilterChange = (event) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    handleIndex(tag);
  }

  useEffect(() => {
    handleIndex();
    handleIndexTags();
  }, [])

  const handleShow = (post) => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
    <div>
      <label htmlFor="tagFilter" className="form-label">Filter by Tag:</label>
        <select
          id="tagFilter"
          className="form-select"
          style={{ maxWidth: "200px" }}
          value={selectedTag}
          onChange={handleFilterChange}
        >
          <option value="">All Recipes</option>
          {allTags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>r
    </div>
      <PostsIndex postsProp={posts} onShow={handleShow} />
    </div>
  );
}