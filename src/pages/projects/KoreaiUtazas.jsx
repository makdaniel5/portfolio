import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import korea1 from "../../assets/images/korea1.webp";
import korea2 from "../../assets/images/korea2.webp";
import korea3 from "../../assets/images/korea3.webp";
import korea4 from "../../assets/images/korea4.webp";


function KoreaiUtazas() {
  return (
    <>
      <Header />

      <main>
      <Hero title="Koreai utazás" desc="Élménybeszámoló és kulturális tapasztalatok egy nemzetközi utazás alapján." bgImg={korea1} isProject={true} />

      <div className="container">
        <ProjectShowcase 
          images = {[korea1, korea2, korea3, korea4]}
          desc = {["A Koreai utazás projekt egy élménybeszámoló jellegű munka, amely egy nemzetközi tapasztalat személyes és kulturális oldalát mutatja be. A cél nem csupán az események felsorolása, hanem annak bemutatása, hogyan formálja egy ilyen utazás a nyelvi magabiztosságot, a kommunikációt és a világra való nyitottságot.", "A projektben fontos szerepet kapnak a megfigyelések, a kulturális különbségek és azok a helyzetek, amelyekben az idegen nyelv valódi kommunikációs eszközzé válik. Ez jól kapcsolódik az oktatási szemléletemhez is: a nyelvtanulás akkor válik igazán élővé, amikor valódi helyzetekhez, élményekhez és kapcsolódásokhoz kötődik."]}
          summary = {["Kulturális tapasztalatok feldolgozása", "Élménybeszámoló személyes nézőpontból", "Nemzetközi kommunikáció és nyelvi fejlődés"]}
          isAvailable={true}
          url="https://www.instagram.com/p/DMW3it6t3q8/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
        />

      </div>

      </main>

      <Footer />
    </>
  );
}

export default KoreaiUtazas;
