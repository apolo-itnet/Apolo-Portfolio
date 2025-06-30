import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useScrollAnimation = (threshold = 0.2, resetOnExit = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else if (resetOnExit) {
      controls.start("initial");
    }
  }, [inView, controls, resetOnExit]);

  return { ref, controls };
};

export default useScrollAnimation;
