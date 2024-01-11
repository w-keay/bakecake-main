// Importing quotes image from assets
import { quotes } from "../assets";

// FeedbackCard Component
const FeedbackCard = ({ content, name, title, img }) => (
  // Container for the feedback card with specified styles
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* Quotes image for styling */}
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    
    {/* Paragraph displaying the feedback content */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    {/* Container for the user information */}
    <div className="flex flex-row">
      {/* User image */}
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      
      {/* Container for user name and title */}
      <div className="flex flex-col ml-4">
        {/* User name */}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        
        {/* User title */}
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

// Exporting the FeedbackCard component as the default export
export default FeedbackCard;
