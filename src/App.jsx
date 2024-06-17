import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Features, ScrollToTopButton } from "./components";
import Contact from "./components/Contact";



const App = () => (
  <div className="text__gradient w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`text__gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`text__gradient ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Business />
        <Features />
        <Testimonials />
        <CardDeal />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  </div>
);

export default App;
