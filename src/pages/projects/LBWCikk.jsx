import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import cikk1 from "../../assets/images/cikk1.webp";
import cikk2 from "../../assets/images/cikk2.webp";
import cikk3 from "../../assets/images/cikk3.webp";
import cikk4 from "../../assets/images/cikk4.webp";


function LBWCikk() {
  return (
    <>
      <Header />

      <main>
      <Hero title="Tudományos cikk" desc="Publikációhoz kapcsolódó kutatómunka, szakmai összefoglaló és tudományos szövegalkotás." bgImg={cikk1} isProject={true} />

      <div className="container">
        <ProjectShowcase 
          images = {[cikk1, cikk2, cikk3, cikk4]}
          desc = {["A projekt egy kvantitatív egészségtudományi kutatás, amely az alacsony születési súly előfordulását és kockázati tényezőit vizsgálta marginalizált roma közösségekben Szabolcs-Szatmár-Bereg vármegyében.", "A kutatás során 231 roma nő bevonásával történt adatfelvétel strukturált kérdőíves módszerrel. Az elemzés középpontjában a dohányzás, a várandósgondozás, az egészségmagatartás és a szociális tényezők szerepe állt.", "A statisztikai elemzések SPSS programmal készültek khi-négyzet próbák és logisztikus regresszió alkalmazásával. Az eredmények rámutattak arra, hogy a társadalmi hátrányok és az egészségügyi ellátáshoz való korlátozott hozzáférés jelentős hatással vannak a kedvezőtlen perinatális kimenetelekre.", "A tanulmány a KONTAKT – Journal of Nursing and Social Sciences related to Health and Illness nemzetközi folyóiratban jelent meg."]}
          summary = {["Kvantitatív egészségügyi kutatás", "231 fős kutatási minta", "SPSS statisztikai elemzés", "Tudományos publikáció"]}
          isAvailable={true}
          url="https://kont.zsf.jcu.cz/artkey/knt-202504-0003_the-prevalence-of-low-birth-weight-lbw-in-marginalised-roma-populations-a-quantitative-analysis-in-three-seg.php?l=en"
        />

      </div>

      </main>

      <Footer />
    </>
  );
}

export default LBWCikk;
