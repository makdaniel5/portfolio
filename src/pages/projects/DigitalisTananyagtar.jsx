import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import anyagtar1 from "../../assets/images/anyagtar1.webp";
import anyagtar2 from "../../assets/images/anyagtar2.webp";
import anyagtar3 from "../../assets/images/anyagtar3.webp";
import anyagtar4 from "../../assets/images/anyagtar4.webp";


function DigitalisTananyagtar() {
  return (
    <>
      <Header />

      <main>
      <Hero
        title="Digitális tananyagtár"
        desc="Strukturált oktatási segédlet- és előfizetéses rendszer különböző tanulói szintekhez és tanulási célokhoz."
        bgImg={anyagtar1}
        isProject={true}
      />

      <div className="container">
        <ProjectShowcase
          images={[anyagtar1, anyagtar3, anyagtar4, anyagtar2]}

          desc={[
            "A projekt egy folyamatosan bővülő digitális oktatási tananyagtár, amely angol nyelvi és informatikai segédanyagokat rendszerez egy könnyen elérhető rendszerben. Az anyagok különböző tudásszintekhez és tanulási célokhoz igazodnak: megtalálhatók közöttük nyelvtani összefoglalók, vizsgafelkészítő anyagok, könyvek és gyakorlófeladatok, valamint programozáshoz, webfejlesztéshez és más informatikai témákhoz kapcsolódó segédletek.",

            "A tananyagtár több hozzáférési szintre épül. A Basic csomag az alapvető tananyagokhoz biztosít hozzáférést, míg a Prémium és Prémium+ szintek további tematikus gyűjteményekkel, játékos tanulási tartalmakkal, saját fejlesztésű anyagokkal, webináranyagokkal, konzultációs lehetőségekkel és igény szerint készített segédletekkel egészítik ki a rendszert. A projekt célja, hogy az angol és informatika tanulásához szükséges forrásokat átlátható, rendszerezett formában tegye elérhetővé."
          ]}

          summary={[
            "Angol és informatikai tananyagok",
            "Különböző tudásszintekhez igazítva",
            "Vizsgafelkészítő és gyakorló segédletek",
            "Többszintű hozzáférési rendszer",
            "Folyamatosan bővülő tartalom"
          ]}

          isAvailable={true}
          url="https://buymeacoffee.com/makdanieltanar/e/437236"
        />
      </div>

      </main>

      <Footer />
    </>
  );
}

export default DigitalisTananyagtar;
