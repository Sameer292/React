import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Githubinfo,{githubLoader} from "./components/Githubinfo.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/Hero.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Home" element={<Home />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Githubinfo" loader={githubLoader} element={<Githubinfo />} />
      <Route path="user/:userId" element={<User/>} />      
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
