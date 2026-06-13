import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProjectHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </div>

        <div />
      </div>
    </header>
  );
};

export default ProjectHeader;
