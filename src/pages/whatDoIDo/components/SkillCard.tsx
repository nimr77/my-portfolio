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
          className={`w-full h-1/2 ${
            fullScreen ? "object.cover" : "object-contain"
          }
          ${!fullScreen ? "p-4" : ""}
          `}
        />
        <div className="w-full h-1/2 flex flex-col justify-center items-center p-5">
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
      </div>
    );
  });
}
