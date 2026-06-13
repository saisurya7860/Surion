import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import ProjectLayout from "../layouts/ProjectLayout.jsx";
import TermsPage from "../pages/TermsPage.jsx";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<ProjectLayout />}>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
