import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navlinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    // { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const [hovered, setHovered] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <header className="w-full md:py-4 py-1 px-4 flex justify-between items-center md:bg-transparent bg-white rounded-4xl">
        {/* LOGO */}
        <div className="md:bg-white md:w-14 md:h-14 w-12 h-12 flex justify-center items-center rounded-full md:shadow-md">
          <Link to="/">
            <FontAwesomeIcon
              icon={faSun}
              size="xl"
              className="text-indigo-600 w-10 h-10 animate-spin hover:animate-none [animation-duration:12s]"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div
          className="hidden md:flex items-center bg-gray-100 px-2 py-1 rounded-full border border-gray-200 shadow-sm"
          onMouseLeave={() => setHovered(null)}
        >
          {navlinks.map((link) => {
            const current = hovered ?? activeSection;

            return (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                onMouseEnter={() => setHovered(link.id)}
                className="relative px-4 py-2 text-sm font-medium cursor-pointer"
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    current === link.id
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </span>

                {current === link.id && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-indigo-600 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-7 h-8 text-gray-700" />
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faSun}
              size="2x"
              className="text-indigo-600"
            />

            <div>
              <p className="font-bold text-xl">Surion</p>
              <p className="text-sm text-gray-500">
                Engineered, not showcased
              </p>
            </div>
          </div>

          <X
            className="w-7 h-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="flex flex-col py-4">
          {navlinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                handleScroll(link.id);
                setOpen(false);
              }}
              className={`text-left px-6 py-3 transition-colors ${
                activeSection === link.id
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;