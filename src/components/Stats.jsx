// Importing React, useEffect for side effects, and necessary animation components from react-spring
import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

// Importing useInView for tracking visibility and stats from constants
import { useInView } from "react-intersection-observer";
import { stats } from "../constants";

// Importing styles
import styles from "../style";

// Stats Component
const Stats = () => {
  // Tracking component visibility
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  // Configuring spring animation for stats
  const statsProps = useSpring({
    opacity: inView ? 1 : 0,
    config: config.molasses,
  });

  // useEffect for additional logic (currently empty)
  useEffect(() => {
    // You can add additional logic here if needed
  }, []);

  // JSX structure for the Stats component
  return (
    <animated.section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`} ref={ref} style={statsProps}>
      {/* Mapping over stats data to create animated stat components */}
      {stats.map((stat) => (
        <animated.div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          {/* Animated stat value */}
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          
          {/* Animated stat title */}
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </animated.div>
      ))}
    </animated.section>
  );
};

// Exporting the Stats component as the default export
export default Stats;
