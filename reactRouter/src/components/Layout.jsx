import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Header />
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;