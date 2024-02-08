import json from "../../../assets/footer.json";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  // it has social media

  return (
    <>
      <div className="w-full h-px  bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="flex flex-row justify-end  mt-5">
        {json.map((item) => {
          const icon = {
            github: <AiFillGithub className="w-6 h-6" />,
            linkedin: <AiFillLinkedin className="w-6 h-6" />,
          }[item.icon];

          const title = item.title;
          const link = item.link;
          return (
            <div className="flex">
              <a className="focus:outline-none " href={link} target="_blank">
                <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm shadow-md m-4 flex justify-center items-center">
                  {icon}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
