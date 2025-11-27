import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {

  return (
    <div className="container">
      <Header />
      <PostsPage />
      <Footer />
    </div>
  )
}

export default App
