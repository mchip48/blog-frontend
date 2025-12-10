import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const email = localStorage.getItem("email");
  return (
    <header>

    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Matt's Blog</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#posts-index">All Posts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#posts-new">New Post</a>
            </li>
            {email ? (
              <>
              <span> | Logged in as {email} | </span>
            <li className="nav-item">
              <a className="nav-link" href="#"></a> | <LogoutLink />
            </li>
              </>
            ) : (
              <>
              <span> | </span>
              <Link to="/signup">Signup</Link>
              <span> | </span>
              <Link to="/login">Login</Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
    
    </header>
  );
}
