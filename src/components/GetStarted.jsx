// Importing styles and arrowUp icon from respective paths
import styles from "../style";
import { arrowUp } from "../assets";

// GetStarted Component
const GetStarted = () => (
  // Container for the GetStarted component with specified styles
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    {/* Inner container for the component */}
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      {/* Container for the text and arrow icon */}
      <div className={`${styles.flexStart} flex-row`}>
        {/* Text with gradient effect */}
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        
        {/* Arrow-up icon */}
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      {/* Text with gradient effect */}
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

// Exporting the GetStarted component as the default export
export default GetStarted;
