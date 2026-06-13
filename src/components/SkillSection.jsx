import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import Skillcard from "./skills/Skillcard.jsx";
import { getSkills } from "../services/skillServices.js";
import Loader from "./ui/Loader.jsx";

const SkillSection = () => {
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const res = await getSkills();
        setSkills(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section className="w-full min-h-screen bg-slate-50 py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col gap-5 items-center">
        <div>
          <SectionTitle
            title="Skills & Technologies"
            des="From logic to launch—this is how I build the future."
          />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            {skills.map((category) => (
              <div key={category.id} className="mb-10">
                <div className="text-2xl font-semibold py-3 text-center">
                  {category.name}
                </div>

                <div className="flex flex-wrap gap-4 pt-3 justify-center">
                  {category.skills?.map((skill) => (
                    <Skillcard key={skill.id} data={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
