import styles from "./style";
import { Navbar, Hero, Clients, Analytics, GetApp, Access } from "./components";

function App() {
  return (
    <main className="bg-primary w-full overflow-hidden">

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Clients />
          <Analytics />
          <GetApp />
          <Access />
        </div>
      </div>

    </main>
  );
}

export default App;
