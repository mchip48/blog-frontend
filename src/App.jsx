import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children : [
      {
        path: "/",
        element: <PostsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App





// was in function App()


// const email = localStorage.getItem("email");

// <div className="container">
//   <Header />
//   {!email && (
//     <>
//       <SignupPage />
//       <LoginPage />
//     </>
//   )}
//   <PostsPage />
//   <Footer />
// </div>