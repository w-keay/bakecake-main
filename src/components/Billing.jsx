// Import necessary dependencies from React and external libraries
import React, { useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { apple, bill, google } from "../assets"; // Import image assets
import styles, { layout } from "../style"; // Import styles and layout configurations

// Define a functional component called AnimatedBilling
const AnimatedBilling = () => {
  // Use the react-intersection-observer hook to check if the component is in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px", // Adjust the rootMargin as needed
  });

  // Use the react-spring useSpring hook to create animated props for different elements
  const [billProps, setBillProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(-50%)", // Adjust the initial translation for left-to-right effect
    config: config.molasses, // Animation configuration
  }));

  const [headingProps, setHeadingProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(50%)", // Adjust the initial translation for right-to-left effect
    config: config.molasses, // Animation configuration
  }));

  const [paragraphProps, setParagraphProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(50%)", // Adjust the initial translation for right-to-left effect
    config: config.molasses, // Animation configuration
  }));

  const [imgProps, setImgProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(50%)", // Adjust the initial translation for right-to-left effect
    config: config.molasses, // Animation configuration
  }));

  // Function to reset all animations to their initial state
  const resetAnimations = () => {
    setBillProps({ opacity: 0, transform: "translateX(-50%)" });
    setHeadingProps({ opacity: 0, transform: "translateX(50%)" });
    setParagraphProps({ opacity: 0, transform: "translateX(50%)" });
    setImgProps({ opacity: 0, transform: "translateX(50%)" });
  };

  // Trigger animations when the component is in view
  useEffect(() => {
    if (inView) {
      setBillProps({ opacity: 1, transform: "translateX(0%)" });
      setHeadingProps({ opacity: 1, transform: "translateX(0%)" });
      setParagraphProps({ opacity: 1, transform: "translateX(0%)" });
      setImgProps({ opacity: 1, transform: "translateX(0%)" });
    }
  }, [inView, setBillProps, setHeadingProps, setParagraphProps, setImgProps]);

  // Reset animations when the component is out of view
  useEffect(() => {
    if (!inView) {
      resetAnimations();
    }
  }, [inView]);

  // Return the animated section component with dynamic styles and animations
  return (
    <animated.section id="product" className={`${layout.sectionReverse} ${layout.section} ${styles.paddingY}`} ref={ref}>
      <div className={layout.sectionImgReverse}>
        <animated.img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" style={billProps} />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <animated.h2 className={styles.heading2} style={headingProps}>
          Easily control your <br className="sm:block hidden" /> culinary delights
        </animated.h2>
        <animated.p className={`${styles.paragraph} max-w-[470px] mt-5`} style={paragraphProps}>
          Want to try something new? Or want to cancel the current subscription? All can be done in one click!
        </animated.p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <animated.img src={apple} alt="apple" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" style={imgProps} />
          <animated.img src={google} alt="google" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" style={imgProps} />
        </div>
      </div>
    </animated.section>
  );
};

// Export the AnimatedBilling component as the default export
export default AnimatedBilling;
