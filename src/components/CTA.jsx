// Importing React, useEffect, useSpring, animated, config, useInView, styles, and Button from respective dependencies
import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import styles from "../style";
import Button from "./Button";

// Call-To-Action (CTA) Component
const CTA = () => {
  // Using useInView to track visibility of the CTA section
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  // Applying spring animation to textProps for opacity and translation effect
  const [textProps, setTextProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(-50%)",
    config: config.molasses,
  }));

  // Triggering animation when the component is in view
  useEffect(() => {
    setTextProps({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0%)" : "translateX(-50%)",
    });
  }, [inView, setTextProps]);

  // Rendering animated section with CTA content
  return (
    <animated.section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      ref={ref}
      style={{
        ...textProps,
        visibility: inView || textProps.opacity > 0 ? "visible" : "hidden",
      }}
    >
      <div className="flex-1 flex flex-col">
        {/* Heading for the CTA section */}
        <h2 className={styles.heading2}>Time to tuck in?</h2>
        {/* Paragraph describing the CTA */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Get started with a handful of sprinkles now!
        </p>
      </div>

      {/* Button component for CTA */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </animated.section>
  );
};

// Exporting the CTA component as the default export
export default CTA;
