import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import axios from "axios";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  const email = localStorage.getItem("email");

  return (
    <div className="container">
      <Header />
      {!email && (
        <>
          <SignupPage />
          <LoginPage />
        </>
      )}
      <PostsPage />
      <Footer />
    </div>
  )
}

export default App
