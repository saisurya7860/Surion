import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  
  const navigate = useNavigate();

  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900">Surya B</h2>

            <p className="mt-2 text-slate-600 max-w-md">
              AI & Full-Stack Developer passionate about building intelligent
              solutions that create real-world impact.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/saisurya7860"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/surya-btechi/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>

            {/* <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <FaInstagram size={24} />
            </a> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="cursor-pointer">
              <img src={logo} alt="" className="w-6 h-6 " />
            </div>
            <p>© {new Date().getFullYear()} Surya B. All rights reserved.</p>
          </div>

          <ul className="flex items-center gap-4">
            <li
              onClick={() => navigate("/terms")}
              className="hover:text-indigo-600 hover:underline cursor-pointer text-sm"
            >
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
