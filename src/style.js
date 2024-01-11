// Object defining styles for reusability throughout the application
const styles = {
  // Responsive styling for setting maximum width of a box
  boxWidth: "xl:max-w-[1280px] w-full",

  // Styling for heading level 2, with font styles, text sizes, and leading
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  // Styling for paragraphs with font styles, text color, and leading
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  // Flex container styles for centering and starting alignment
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  // Padding styles for different screen sizes
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  // Margin styles for different screen sizes
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

// Object defining layout styles for different sections
export const layout = {
  // Flex container styles for a section with padding on the Y-axis
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  
  // Flex container styles for a section with reverse order and padding on the Y-axis
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  // Flex container styles for a section with an image on the right and padding on the Y-axis
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  
  // Flex container styles for a section with an image on the left and padding on the Y-axis
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  // Flex container styles for a section with information and starting alignment
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

// Exporting the 'styles' object as the default export of this module
export default styles;
