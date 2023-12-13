import React from "react";
import json from "../../../../assets/tools.json";

export default function SkillCards() {
  return json.map((item) => {
    const fullScreen = item.title == "Web";

    return (
      <div className=" w-80 h-72 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm shadow-md m-4">
        <img
          src={`../../../../assets/images/${item.image}`}
          alt={item.title}
          className={`w-full h-44 ${
            fullScreen ? "object.cover" : "object-contain"
          }
          ${!fullScreen ? "p-4" : ""}
          `}
        />
        <div className="w-full  flex flex-col justify-center items-center px-4 pb-4 text-center pt-2">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
      </div>
    );
  });
}
