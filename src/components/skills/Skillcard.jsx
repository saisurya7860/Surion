import React from "react";
// import surya from "../../assets/Surya.jpg";


const Skillcard = ({ data }) => {
  return (
    <div className="py-1.5 px-5 text-lg font-medium bg-white rounded-3xl text-center flex items-center gap-3 border-gray-300 shadow-xs hover:drop-shadow-sm border">
      <img src={data.skillimage} alt="" className="w-7 h-7 "/>
      {data.name}
    </div>
  );
};

export default Skillcard;
