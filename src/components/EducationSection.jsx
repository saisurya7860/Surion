import React, { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Loader from "./ui/Loader";
import { getEducations } from "../services/educationServices";
import { ExternalLink } from "lucide-react";

const EducationSection = () => {
  const [loading, setLoading] = useState(false);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        setLoading(true);
        const res = await getEducations();
        setEducation(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="education" className="w-full min-h-screen bg-slate-50 py-25 px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          des="Learning by doing, growing by failing, and succeeding by never stopping."
        />

        <div className="pt-8">
          {loading ? (
            <Loader />
          ) : (
            <div className="max-w-3xl mx-auto ">
              {education.map((edu, index) => (
                <div key={edu.id} className="flex gap-4 md:gap-5">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <img
                      src={edu.institutionlogo}
                      alt={edu.institutionname}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-md"
                    />

                    {index !== education.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-300 mt-3" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-16 flex-1">
                    <p className="text-indigo-600 font-semibold text-base">
                      {formatDate(edu.startdate)} - {formatDate(edu.enddate)}
                    </p>

                    <h3 className="text-lg md:text-xl font-bold mt-2">
                      {edu.coursename}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <h4 className="text-lg text-slate-600 font-medium">
                        {edu.institutionname}
                      </h4>

                      <a
                        href={edu.institutionlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-indigo-600 transition-colors"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>

                    <p className="mt-3 leading-7 text-base text-slate-600 max">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
