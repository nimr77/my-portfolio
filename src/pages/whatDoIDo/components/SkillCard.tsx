import React from "react";
import { useEffect } from "react";
import json from "../../../../assets/tools.json";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

export default function SkillCards() {
  return (
    <AnimatePresence>
      {json.map((item) => {
        const fullScreen = item.title == "Web";
        const control = useAnimation();

        const ref = React.useRef(null);

        const inView = useInView(ref);

        useEffect(() => {
          if (inView) {
            control.start({
              opacity: 1,
              y: 0,
            });
          }
        }, [control, inView]);

        const index = json.indexOf(item);

        return (
          <motion.div
            ref={ref}
            key={item.title}
            animate={control}
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 * index }}
          >
            <button className="focus:outline-none ">
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
            </button>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
