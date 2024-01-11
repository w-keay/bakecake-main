// Importing React for creating a functional component
import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

// AnimatedCardDeal Component
const AnimatedCardDeal = () => {
  // Setting up Intersection Observer for component visibility
  const [componentRef, componentInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  // Setting up Intersection Observer for card visibility
  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });

  // Configuring spring animations for the component
  const [componentProps, setComponentProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(-50%)",
    config: config.molasses,
  }));

  // Configuring spring animations for the card
  const [cardProps, setCardProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(50%)", // Adjusted to come from right to left
    config: config.molasses,
  }));

  // Reset animation function for the component
  const resetComponentAnimation = () => {
    setComponentProps({
      opacity: 0,
      transform: "translateX(-50%)",
    });
  };

  // Reset animation function for the card
  const resetCardAnimation = () => {
    setCardProps({
      opacity: 0,
      transform: "translateX(50%)",
    });
  };

  // UseEffect to reset component animation when out of view
  useEffect(() => {
    if (!componentInView) {
      resetComponentAnimation();
    }
  }, [componentInView]);

  // UseEffect to reset card animation when out of view
  useEffect(() => {
    if (!cardInView) {
      resetCardAnimation();
    }
  }, [cardInView]);

  // UseEffect to trigger component animation when in view
  useEffect(() => {
    if (componentInView) {
      setComponentProps({
        opacity: 1,
        transform: "translateX(0%)",
      });
    }
  }, [componentInView, setComponentProps]);

  // UseEffect to trigger card animation when in view
  useEffect(() => {
    if (cardInView) {
      setCardProps({
        opacity: 1,
        transform: "translateX(0%)",
      });
    }
  }, [cardInView, setCardProps]);

  // JSX structure for the AnimatedCardDeal component
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        {/* Animated heading for the component */}
        <animated.div ref={componentRef} style={componentProps}>
          <h2 className={styles.heading2}>
            Add Meaning <span className={`text-gradient ${styles.gradientText}`}>To Your Occasion</span>{" "}
          </h2>
        </animated.div>

        {/* Animated paragraph for the component */}
        <animated.div ref={componentRef} style={{ maxWidth: "470px", marginTop: "0rem", ...componentProps }}>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            A cake tastes nicer freshly baked! So, for your next special occasion, bring your baking skills to the party!
          </p>
        </animated.div>

        {/* Animated button for the component */}
        <animated.div ref={componentRef} style={componentProps}>
          <Button styles={`mt-10`} />
        </animated.div>
      </div>

      {/* Animated card section */}
      <animated.div ref={cardRef} className={layout.sectionImg} style={cardProps}>
        <img src={card} alt="card_deal" className="w-[100%] h-[100%]" />
      </animated.div>
    </section>
  );
};

// Exporting the AnimatedCardDeal component as the default export
export default AnimatedCardDeal;
