// Importing React, useInView for tracking visibility, useSpring for animations, and necessary components
import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

// Importing feedback data, styles, and FeedbackCard component
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

// Testimonials Component
const Testimonials = () => {
  // Tracking component visibility
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px", // Adjust the rootMargin as needed
  });

  // Configuring spring animation for testimonials section
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0%)" : "translateY(50%)",
    config: { tension: 300, friction: 20 },
  });

  // JSX structure for the Testimonials component
  return (
    <animated.section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      ref={ref}
      style={props}
    >
      {/* Gradient background */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      {/* Heading and subtitle */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <animated.h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </animated.h2>
        <div className="w-full md:mt-0 mt-6">
          <animated.p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Take a look at some our five-star reviews!
          </animated.p>
        </div>
      </div>

      {/* Feedback cards */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {/* Mapping over feedback data to create animated FeedbackCard components */}
        {feedback.map((card, index) => (
          <FeedbackCard
            key={card.id}
            style={{
              ...props,
              marginBottom: index !== feedback.length - 1 ? "2rem" : 0,
              display: inView ? "block" : "none",
            }}
            {...card}
          />
        ))}
      </div>
    </animated.section>
  );
};

// Exporting the Testimonials component as the default export
export default Testimonials;
