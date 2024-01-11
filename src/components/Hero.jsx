// Importing React, useRef, useEffect, useSpring, animated, config, useInView, styles, and assets
import React, { useRef, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import styles from "../style";
import { discount, bluecake } from "../assets";
import GetStarted from "./GetStarted";

// AnimatedHero Component
const AnimatedHero = () => {
  // Ref to observe whether the component is in view
  const ref = useRef();

  // Animation configuration for the bluecake image
  const [bluecakeProps, setbluecake] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(50%)',
    config: config.molasses, // Adjust the config for the animation
  }));

  // Animation configuration for the left-side components
  const [leftSideProps, setLeftSide] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-50%)',
    config: config.molasses, // Adjust the config for the animation
  }));

  // Trigger the animation when the components are in view
  const [inViewRef, inView] = useInView({
    triggerOnce: false, // Allow the animation to trigger multiple times
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  // Set the animation values when the components are in view
  useEffect(() => {
    if (inView) {
      setbluecake({ opacity: 1, transform: 'translateX(0%)' });
      setLeftSide({ opacity: 1, transform: 'translateX(0%)' });
    }
  }, [inView, setbluecake, setLeftSide]);

  // Reset the animation when the user scrolls away and back
  useEffect(() => {
    if (!inView) {
      setbluecake({ opacity: 0, transform: 'translateX(50%)' });
      setLeftSide({ opacity: 0, transform: 'translateX(-50%)' });
    }
  }, [inView, setbluecake, setLeftSide]);

  // JSX structure for the AnimatedHero component
  return (
    <section
      id="home"
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Left-side components */}
      <animated.div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} style={leftSideProps}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For Your{" "}
            <span className="text-white">First</span> Month
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ${styles.heading1}`}>
            Your New <br className="sm:block hidden" />{" "}
            <span className={`text-gradient ${styles.gradientText}`}>Favourite</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full ${styles.heading1}`}>
          Cake Awaits.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        At BakeCake we pursue delight. <br></br>
        Richness and fondue in every bite.<br></br>
        From chocolatey slices to frosted flakes,<br></br>
        At such good prices the temptation awaits.
        </p>
      </animated.div>

      {/* Wrap the image with the animated component */}
      <animated.div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} style={bluecakeProps}>
        <img src={bluecake} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </animated.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

// Exporting the AnimatedHero component as the default export
export default AnimatedHero;
