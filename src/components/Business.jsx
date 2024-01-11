// Import necessary dependencies from React and external libraries
import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { features } from "../constants"; // Import feature constants
import styles, { layout } from "../style"; // Import styles and layout configurations
import Button from "./Button"; // Import the Button component

// Define a functional component called FeatureCard
const FeatureCard = ({ icon, title, content, index, cardInView }) => {
  // Use the react-spring useSpring hook to create animated props for the feature card
  const cardProps = useSpring({
    opacity: cardInView ? 1 : 0,
    transform: cardInView ? "translateX(0%)" : "translateX(50%)",
    config: config.molasses, // Animation configuration
  });

  // Return the animated feature card component with dynamic styles and animations
  return (
    <animated.div
      key={index}
      className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
      style={{
        ...cardProps,
        visibility: cardInView ? "visible" : "hidden",
      }}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="feature_icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </animated.div>
  );
};

// Define a functional component called Business
const Business = () => {
  // Use the react-intersection-observer hook to check if the text and feature card sections are in view
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  // Use the react-spring useSpring hook to create animated props for text, button, and feature card sections
  const textProps = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? "translateX(0%)" : "translateX(-50%)",
    config: config.molasses, // Animation configuration
  });

  const buttonProps = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? "translateX(0%)" : "translateX(-50%)",
    config: config.molasses, // Animation configuration
  });

  // Return the Business component with animated text, button, and feature card sections
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo} ref={textRef}>
        <animated.h2 className={styles.heading2} style={{ ...textProps, visibility: textInView ? "visible" : "hidden" }}>
          You do the baking, <br className="sm:block hidden" /> we’ll handle the rest.
        </animated.h2>
        <animated.p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ ...textProps, visibility: textInView ? "visible" : "hidden" }}>
          With the right recipe, you too can become a master baker.
        </animated.p>
        <animated.div style={{ ...buttonProps, visibility: textInView ? "visible" : "hidden" }}>
          <Button styles={`mt-10`} />
        </animated.div>
      </div>

      <div className={`${layout.sectionImg} flex-col`} ref={cardRef}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} cardInView={cardInView} />
        ))}
      </div>
    </section>
  );
};

// Export the Business component as the default export
export default Business;
