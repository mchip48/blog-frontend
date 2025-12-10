import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to Matt's Blog!</h1>
      <p>Browse all of my blog posts here!</p>
      <Link to="/posts">View All Posts</Link>
    </div>
  );
}