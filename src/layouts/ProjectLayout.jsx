import React from "react";
import { Outlet } from "react-router-dom";
import Header1 from "./Header1.jsx";
import Footer from "./Footer.jsx";

const ProjectLayout = () => {
  return (
    <div className="bg-[#f1f4f8] min-h-screen">
      <Header1 />

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProjectLayout;
