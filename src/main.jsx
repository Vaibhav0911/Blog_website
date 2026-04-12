import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllPost from "./pages/AllPost.jsx";
import EditPost from "./pages/Editpost.jsx";
import AddPost from "./pages/AddPost.jsx";
import Post from "./pages/Post.jsx";
import MyPost from "./pages/MyPost.jsx";
import { AuthLayout } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />

      <Route element={<AuthLayout authentication={false} />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      
      <Route element={<AuthLayout authentication={true} />}>
        <Route path="post/:slug" element={<Post />} />
        <Route path="edit-post/:slug" element={<EditPost />} />
        <Route path="all-posts" element={<AllPost />} />
        <Route path="my-posts" element={ <MyPost/> } />
        <Route path="add-post" element={<AddPost />} />
      </Route>
    </Route>
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
