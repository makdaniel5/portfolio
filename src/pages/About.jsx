import "../styles/pages/about.css";
import "../styles/pages/services.css";

import Header from "../components/layout/Header.jsx";
import Hero from "../components/layout/Hero.jsx";
import Footer from "../components/layout/Footer.jsx";
import ServicesSection from "../components/common/ServicesSection.jsx";
import CtaSectionAppointment from "../components/common/CtaSectionAppointment.jsx"
import Introduction from "../components/about/Introduction"
import Studies from "../components/about/Studies"

function About() {
  return (
    <>
      <Header />

      <main>

        <Hero title = {["Rólam"]} desc = "Ismerj meg engem és a munkásságomat!"/>
        
        <div className="container">

          <Introduction/>
          <ServicesSection />

        </div>

        <CtaSectionAppointment/>
        
        <Studies />

      </main>

      <Footer />
    </>
  );
}

export default About;
