import "../styles/pages/portfolio.css";

import Header from "../components/layout/Header.jsx";
import Hero from "../components/layout/Hero.jsx";
import Footer from "../components/layout/Footer.jsx";
import CtaSectionCollab from "../components/common/CtaSectionCollab.jsx";
import Projects from "../components/portfolio/Projects";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero title={["Portfólió"]} desc="Válogatás oktatási, fejlesztési és szakmai munkáimból." />

        <section className="project-section">
            <Projects />
        </section>

        <CtaSectionCollab />

      </main>

      <Footer />
    </>
  );
}

export default Home;
