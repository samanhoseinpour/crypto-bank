import styles from './style';
import {
  Billing,
  Business,
  CarDeal,
  Clients,
  Cta,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.boxWidth}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CarDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
