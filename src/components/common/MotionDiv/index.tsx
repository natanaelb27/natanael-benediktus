import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface MotionDivProps {
  children: ReactNode;
}

const MotionDiv: FC<MotionDivProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth <= 768; // You can adjust this threshold as per your requirements
      setIsMobile(isMobileView);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  //   const scrollVariantDesktop = {
  //     visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  //     hidden_up: { opacity: 0, x: -100 },
  //     hidden_down: { opacity: 0, x: 100 },
  //   };

  const scrollVariant = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden_up: { opacity: 0 },
    hidden_down: { opacity: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const [scrollDirection, setScrollDirection] = useState("hidden_up");
  const prevScrollY = useRef(0);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start(scrollDirection);
    }
  }, [control, inView]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("hidden_down");
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection("hidden_up");
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={scrollVariant}
      initial="hidden_up"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
