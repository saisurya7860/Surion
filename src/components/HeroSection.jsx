import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { Download, File, Mail } from "lucide-react";
import Button from "../components/Buttons/Button.jsx";
import { getAbout } from "../services/heroServices.js";
import { Link } from "react-router-dom";
// import surya from "../assets/surya.jpg";
import RoleTypewriter from "../components/Hero/RoleTypewriter.jsx";
import Loader from "../components/ui/Loader.jsx";
import { getLinks } from "../services/socialLinkServices.js";
import resumePdf from "../assets/1.Surya__Resume.pdf";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState();
  const [links, setLinks] = useState();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await getLinks();
        setLinks(res.data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchLinks();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAbout = async () => {
      try {
        setLoading(true);
        const res = await getAbout();
        setAbout(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);
  return (
    <section className="w-full min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex md:flex-row flex-col items-center gap-6  py-25 justify-center md:justify-between">
          {/* content div */}
          <div className="flex flex-col gap-6 md:order-0 order-1">
            <div className="text-6xl font-bold">{about?.name}</div>
            <div className="text-2xl font-bold  text-indigo-600">
              <RoleTypewriter roles={about?.roles || []} />
            </div>
            {/* info of tech */}
            <div className="max-w-xl text-lg text-start">
              {about?.description}
            </div>
            {/* social links */}
            <div
              className="flex gap-2.5
          "
            >
              <a href={links?.github} target="_blank">
                <FaGithub className="w-6 h-6 text-slate-400 hover:text-black transition-colors ease-in-out " />
              </a>
              <a href={links?.linkedin} target="_blank">
                <FaLinkedin className="w-6 h-6 text-slate-400  hover:text-black transition-colors ease-in-out " />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex items-center justify-center  gap-2"
                fullWidth=""
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <Mail className="w-5 h-5" />
                <p>Get in Touch</p>
              </Button>

            
              <a
                href={resumePdf}
                target="_blank"
                // rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant=""
                  className="flex items-center justify-center gap-2 border border-slate-300 bg-gray-50 text-slate-700"
                >
                  <File className="w-5 h-5" />
                  View Resume
                </Button>
              </a>
            </div>
          </div>
          {/* image div */}
          <div className="md:pr-10 shrink-0">
            <div className="w-full shrink-0 flex max-w-xs bg-amber-200 aspect-square rounded-full overflow-hidden lg:order-1 order-0">
              {about?.profileimage ? (
                <img
                  src={about?.profileimage}
                  alt=""
                  className="w-full h-full shrink-0 object-cover"
                />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
