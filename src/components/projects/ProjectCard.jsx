import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  useEffect(() => {
    console.log(project);
  }, []);
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="w-full max-w-md h-full bg-white rounded-2xl  transition-all duration-300 shadow-md border border-transparent hover:border-indigo-500 overflow-hidden"
    >
      {/* Top Image */}
      <div className="relative h-64">
        <img
          src={project.projectimage}
          alt={project.name}
          className="w-full h-full object-cover opacity-90"
        />

        {/* overlay */}
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Tag + Status */}
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-indigo-600 uppercase">
            {project.projectcategory.name}
          </span>

          <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
            Completed
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800">{project.name}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-4 border-t border-slate-200 pt-3">
          {/* Members */}
          <div className="flex -space-x-3">
            {project.members?.map((memberData) => {
              console.log("memberData", memberData);
              console.log("member image", memberData.member?.profileimage);

              return (
                <img
                  key={memberData.id}
                  src={memberData.member?.profileimage}
                  alt={memberData.member?.name}
                  className="w-8 h-8 rounded-full border-white object-cover pr-0.5 border-2"
                />
              );
            })}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project?.githublink && (
              <a
                href={project.githublink}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-indigo-600 transition"
              >
                <FaGithub size={20} />
              </a>
            )}

            {project?.projectlink && (
              <a
                href={project.projectlink}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-indigo-600 transition"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
