import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import kurzus1 from "../../assets/images/kurzus1.webp";
import kurzus2 from "../../assets/images/kurzus2.webp";
import kurzus3 from "../../assets/images/kurzus3.webp";
import kurzus4 from "../../assets/images/kurzus4.webp";


function TanulasiEsOktatasiPlatform() {
  return (
    <>
      <Header />

      <main>
      <Hero title="Tanulási és oktatási platform" desc="Egy oktatási célú webes felület, amely tanulási folyamatokat és digitális tananyagokat támogat." bgImg={kurzus1} isProject={true} />

      <div className="container">
        <ProjectShowcase 
          images = {[kurzus1, kurzus2, kurzus3, kurzus4]}
          desc = {["Ez a projekt egy modern, moduláris oktatási platform koncepciójára épül, amely a tanulási folyamat minden fontos elemét egyetlen rendszerben egyesíti. A cél egy olyan személyre szabható tanulási környezet létrehozása, ahol a videós tananyagok, feladatok, konzultációk, időpontfoglalás és közösségi funkciók átláthatóan, egymásra épülve támogatják a fejlődést.",  "A rendszer különlegessége a rugalmas learning path megközelítés: a tanulók saját tempójukhoz és heti időkeretükhöz igazíthatják a haladást, miközben a platform moduláris felépítése lehetővé teszi az egyéni tanulási utak kialakítását. A projekt hosszú távú célja egy olyan skálázható oktatástechnológiai megoldás fejlesztése, amely ötvözi az emberi támogatást, a közösségi élményt és a jövőbeni AI-alapú tanulástámogatást."]}
          summary = {["Oktatási tartalmak rendszerezése", "Tanulási folyamatok támogatása", "Webes, reszponzív felület"]}
          isAvailable={false}
        />

      </div>

      </main>

      <Footer />
    </>
  );
}

export default TanulasiEsOktatasiPlatform;
