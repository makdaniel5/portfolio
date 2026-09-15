import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import tdk1 from "../../assets/images/tdk1.webp";
import tdk2 from "../../assets/images/tdk2.webp";
import tdk3 from "../../assets/images/tdk3.webp";


function TDK() {
  return (
    <>
      <Header />

      <main>
      <Hero
        title="AI-alapú tanulástámogató rendszer"
        desc="Kognitív pedagógiai elvekre épülő ágens- és RAG-architektúrák fejlesztése és empirikus összehasonlítása."
        bgImg={tdk2}
        isProject={true}
      />

      <div className="container">
        <ProjectShowcase
          images={[tdk1, tdk2, tdk3]}

          desc={[
            "TDK-kutatásom középpontjában egy saját fejlesztésű, mesterséges intelligenciára épülő tanulástámogató rendszer áll. A projekt célja annak vizsgálata, hogyan alakíthatók át a közvetlen válaszadásra épülő nyelvi modellek olyan aktív tanulási környezetté, amely nem egyszerűen megadja a megoldást, hanem kérdésekkel, rávezetéssel és fokozatos segítségnyújtással támogatja a valódi megértést.",

            "A fejlesztett rendszer ágensalapú Corrective RAG architektúrát alkalmaz, amelyet olyan pedagógiai módszerek egészítenek ki, mint Vygotsky legközelebbi fejlődési zónája, a szokratészi kérdezés és a Feynman-technika. A kutatás során kontroll, hagyományos LLM, standard RAG és ágensalapú CRAG megoldások tanulási hatékonyságát tervezem összehasonlítani egyetemi hallgatók bevonásával."
          ]}

          summary={[
            "AI-alapú tanulástámogató rendszer",
            "RAG és ágens-architektúrák",
            "Kognitív pedagógiai módszerek",
            "Empirikus összehasonlító kutatás"
          ]}

          isAvailable={false}
        />
      </div>

      </main>

      <Footer />
    </>
  );
}

export default TDK;
