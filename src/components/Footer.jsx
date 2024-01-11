// Importing styles, logo, and constants from respective paths
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

// Footer Component
const Footer = () => (
  // Container for the footer section with specified styles
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Container for the logo and introductory paragraph */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      {/* Container for the logo */}
      <div className="flex-[1] flex flex-col justify-start mr-10">
        {/* Logo image */}
        <img
          src={logo}
          alt="bakecake"
          className="w-[266px] h-[72.14px] object-contain"
        />
        
        {/* Introduction paragraph */}
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to bake.
        </p>
      </div>

      {/* Container for footer links */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {/* Mapping through footerLinks array to create link sections */}
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            {/* Footer link section title */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            
            {/* List of links in the section */}
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Container for copyright text and social media icons */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      {/* Copyright text */}
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 BakeCake. All Rights Reserved.
      </p>

      {/* Container for social media icons */}
      <div className="flex flex-row md:mt-0 mt-6">
        {/* Mapping through socialMedia array to create social media icons */}
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            // Opening the social media link in a new window on click
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

// Exporting the Footer component as the default export
export default Footer;
