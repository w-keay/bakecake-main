// Importing clients data and styles from constants and style files
import { clients } from "../constants";
import styles from "../style";

// Clients Component
const Clients = () => (
  // Section containing client logos with styling
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {/* Mapping through the clients array to display individual client logos */}
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          {/* Image element displaying the client logo */}
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

// Exporting the Clients component as the default export
export default Clients;
