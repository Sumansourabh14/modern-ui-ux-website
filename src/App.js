import styles from "./style";
import { Navbar, Hero, Clients, Analytics, GetApp, Access, Testimonials, CTA, Footer } from "./components";

function App() {
  return (
    <main className="bg-primary w-full overflow-hidden">

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div> */}

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Analytics />
          <GetApp />
          <Access />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>

    </main>
  );
}

export default App;
