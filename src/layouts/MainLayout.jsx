import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const mainLayout = ({ children }) => {
  return (
    <div className="bg-[#f1f4f8] min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default mainLayout;
