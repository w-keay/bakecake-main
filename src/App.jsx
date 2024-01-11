// Importing the styles module from the "style" file
import styles from "./style";

// Importing individual components from the "components" file
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

// Defining the main App component using a functional component
const App = () => (
  // Outermost container with background color, full width, and hidden overflow
  <div className="bg-primary w-full overflow-hidden">
    {/* Top section with horizontal padding and centering */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      {/* Container with a specific width */}
      <div className={`${styles.boxWidth}`}>
        {/* Rendering the Navbar component */}
        <Navbar />
      </div>
    </div>

    {/* Middle section with background color and content aligned to the start */}
    <div className={`bg-primary ${styles.flexStart}`}>
      {/* Container with a specific width */}
      <div className={`${styles.boxWidth}`}>
        {/* Rendering the Hero component */}
        <Hero />
      </div>
    </div>

    {/* Bottom section with horizontal padding and centering */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      {/* Container with a specific width */}
      <div className={`${styles.boxWidth}`}>
        {/* Rendering various components in a specific order */}
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

// Exporting the App component as the default export of this module
export default App;
