// Import React for creating a functional component
import React from "react";

// Button Component
const Button = ({ styles }) => (
  /**
   * Button element with specified type, styles, and content
   * @param {string} styles - Additional styles for the button, passed as a prop
   */
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </button>
);

// Export the Button component as the default export
export default Button;
