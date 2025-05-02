import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Users from "./Components/Users.jsx";
import ShowUsers from "./Components/ShowUsers.jsx";
import Posts from "./Components/Posts.jsx";
import ShowPosts from "./Components/ShowPosts.jsx";
import Error from "./Components/Error.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/users/:id",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),

        element: <ShowUsers></ShowUsers>,
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/posts/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<ShowPosts></ShowPosts>
      }

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
