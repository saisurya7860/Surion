import React from "react";

const Loader = ({ text }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="flex items-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="ml-3 text-sm text-slate-500">{text}</div>
      </div>
    </div>
  );
};

export default Loader;
