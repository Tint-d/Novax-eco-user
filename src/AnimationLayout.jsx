import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const AnimationLayout = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className=" overflow-hidden  w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationLayout;
