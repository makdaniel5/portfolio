import "../styles/pages/services.css";

import Header from "../components/layout/Header.jsx";
import Hero from "../components/layout/Hero.jsx";
import Footer from "../components/layout/Footer.jsx";
import ServicesSection from "../components/common/ServicesSection.jsx";
import StepsSection from "../components/services/StepsSection";
import CtaSectionAppointment from "../components/common/CtaSectionAppointment.jsx"
import PricesSection from "../components/services/PricesSection";

function Services() {
  return (
    <>
      <Header />

      <main>

        <Hero title={["Szolgáltatások"]} desc="Vedd igénybe szolgáltatásaimat angolból, programozásból, webfejlesztésből, adatbázis-kezelésből és statisztikából." />
        
        <div className="container">

          <ServicesSection />
          <StepsSection />

        </div>

        <CtaSectionAppointment/>

        <section className="container">

          <PricesSection />

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Services;
