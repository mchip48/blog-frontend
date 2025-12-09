import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import axios from "axios";
import { SignupPage } from "./SignupPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="container">
      <Header />
      <SignupPage />
      <PostsPage />
      <Footer />
    </div>
  )
}

export default App
