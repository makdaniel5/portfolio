import "../styles/pages/contact.css";

import Header from "../components/layout/Header.jsx";
import Hero from "../components/layout/Hero.jsx";
import Footer from "../components/layout/Footer.jsx";
import CtaSectionAppointment from "../components/common/CtaSectionAppointment.jsx"
import FormSection from "../components/contact/FormSection";
import FAQ from "../components/contact/FAQ";

function Contact() {
  return (
    <>
      <Header />

      <main>

        <Hero title={["Kapcsolat"]} desc="Lépj kapcsolatba velem órákkal, együttműködéssel vagy kérdésekkel kapcsolatban." />
        
        <div className="container">

          <FormSection />

        </div>

        <CtaSectionAppointment/>

        <FAQ />

      </main>

      <Footer />
    </>
  );
}

export default Contact;
