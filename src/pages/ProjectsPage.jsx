import React, { useEffect, useState } from "react";
import { getProjects } from "../services/projectServices";
import ProjectCard from "../components/projects/ProjectCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header1 from "../layouts/Header1";
import Loader from "../components/ui/Loader";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await getProjects();
        console.log(res);
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="pb-15">
            <div className="text-center text-4xl font-bold">All Projects</div>
            <div className="text-center text-xl text-gray-500 mt-2">
              Explore all the projects I've worked on. Filter or search to find
              something specific.
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
