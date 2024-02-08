import React from "react";
import { useEffect } from "react";
import json from "../../../../assets/bridgs.json";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

export default function ProjectCards() {
  return (
    <AnimatePresence>
      {json.projects.map((item) => {
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

        const index = json.projects.indexOf(item);

        return (
          <motion.div
            ref={ref}
            key={item.name}
            animate={control}
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 * index }}
          >
            <button className="focus:outline-none m-4 w-48 flex flex-col  justify-center  items-center object-center ">
              <div className=" w-32 h-32 rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm shadow-md ">
                <img
                  src={`images/projects/${item.image}`}
                  alt={item.name}
                  className={`w-full h-full object-cover`}
                  key={item.name}
                />
                {/* <div className="w-full  flex flex-col justify-center items-center px-4 pb-4 text-center pt-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p>{item.shortDescription}</p>
                </div> */}
              </div>
              <div className="w-full justify-center  self-center-center items-center px-4 pb-4 text-center pt-2 ">
                <h3 className="text-lg font-bold">{item.name}</h3>
              </div>
            </button>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}
