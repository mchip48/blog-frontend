import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PostsNew } from "./PostsNew";

export function PostsNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    axios.post("/posts.json", params).then((response) => {
      console.log(response.data);
      navigate("/posts");
    });
  };

  return (
    <div>
      <PostsNew onCreate={handleCreate} />
    </div>
  );
}