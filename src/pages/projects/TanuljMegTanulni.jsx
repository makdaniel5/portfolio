import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import könyv1 from "../../assets/images/könyv1.webp";
import könyv2 from "../../assets/images/könyv2.webp";
import könyv3 from "../../assets/images/könyv3.webp";
import könyv4 from "../../assets/images/könyv4.webp";


function TanuljMegTanulni() {
  return (
    <>
      <Header />

      <main>
      <Hero title="Tanulj meg tanulni" desc="Tanulásmódszertani anyagok és gyakorlati tippek hatékonyabb, tudatosabb felkészüléshez." bgImg={könyv1} isProject={true} />

      <div className="container">
        <ProjectShowcase 
          images = {[könyv1, könyv2, könyv3, könyv4]}
          desc = {["Ez a projekt egy nyelvtanulási módszertani útmutató, amely gyakorlati tippeken, modern tanulási technikákon és személyes tapasztalatokon keresztül segíti a hatékony angoltanulást. A cél egy olyan könnyen alkalmazható rendszer bemutatása, amely támogatja a rendszeres gyakorlást, a motiváció fenntartását és a tudatos nyelvhasználat kialakítását.", "Az útmutató saját tapasztalatokra, kutatásokra és korszerű tanulásmódszertani elvekre épül, közérthető és gyakorlatias formában."]}
          summary = {["Szokásalapú nyelvtanulás", "Mindennapi angolhasználat", "Hatékony tanulási környezet kialakítása", "Modern tanulási technikák", "Pomodoro és spaced learning módszerek", "Koncentráció és memória fejlesztése"]}
          isAvailable={true}
          url="https://buymeacoffee.com/makdanieltanar/e/437243"
        />

      </div>

      </main>

      <Footer />
    </>
  );
}

export default TanuljMegTanulni;
