import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import poster1 from "../../assets/images/poster1.webp";
import poster2 from "../../assets/images/poster2.webp";


function DijnyertesPoszter() {
  return (
    <>
      <Header />

      <main>
      <Hero title="Díjnyertes poszter" desc="Konferencián bemutatott szakmai poszter letisztult, informatív vizuális megoldásokkal." bgImg={poster1} isProject={true} />

      <div className="container">
        <ProjectShowcase 
          images = {[poster1, poster2]}
          desc = {["Ez a tudományos poszter egy kvantitatív kutatás eredményeit mutatja be, amely a koraszülés (PTB) és az alacsony születési súly (LBW) előfordulását és kockázati tényezőit vizsgálta marginalizált roma közösségekben, Szabolcs-Szatmár-Bereg vármegyében.", "A kutatás célja a kedvezőtlen születési kimeneteleket befolyásoló társadalmi és egészségügyi tényezők feltárása volt, különös tekintettel a dohányzásra, alkoholfogyasztásra, droghasználatra, fertőzésekre és a terhesgondozás hiányára.", "A projekt célja, hogy felhívja a figyelmet a marginalizált közösségek egészségügyi egyenlőtlenségeire, és támogassa a célzott prevenciós és egészségfejlesztési programok kialakítását."]}
          summary = {["Koraszülés és születési súly vizsgálata", "Roma közösségek kutatása", "Statisztikai kockázatelemzés", "Tudományos poszter készítése"]}
          isAvailable={true}
          url="https://pmc.ncbi.nlm.nih.gov/articles/PMC12386447/?utm_source=chatgpt.com"
        />

      </div>

      </main>

      <Footer />
    </>
  );
}

export default DijnyertesPoszter;
