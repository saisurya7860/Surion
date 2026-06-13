import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import Loader from "./ui/Loader.jsx";
import ProjectCard from "./projects/ProjectCard.jsx";
import { getProjects } from "../services/projectServices.js";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await getProjects();
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="w-full min-h-screen py-25">
      <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <div>
          <SectionTitle
            title="Projects"
            des="From ideas to impact—Click on a project to see a detailed case study."
          />
        </div>

        <div className="pt-12">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center gap-10 md:grid-cols-2">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="text-indigo-600 font-semibold"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
