import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import portfolio1 from "../../assets/images/portfolio1.webp";
import portfolio2 from "../../assets/images/video-poster.webp";


function SzemelyesPortfolio() {
  return (
    <>
      <Header />

      <main>
      <Hero
        title="Személyes portfólió weboldal"
        desc="Modern, reszponzív és akadálymentes weboldal, amely a letisztult megjelenést a tudatos felhasználói élménnyel ötvözi."
        bgImg={portfolio1}
        isProject={true}
      />

      <div className="container">
        <ProjectShowcase
          images={[portfolio1, portfolio2]}

          desc={[
            "A projekt célja egy modern személyes portfólió és bemutatkozó weboldal megtervezése és fejlesztése volt. A felület kialakításánál a letisztult vizuális megjelenés mellett kiemelt szerepet kapott a felhasználói élmény, az egyértelmű navigáció és a megfelelő affordancia, hogy az oldal funkciói és interaktív elemei könnyen felismerhetők és használhatók legyenek.",

            "A fejlesztés egyik központi szempontja a webes akadálymentesség volt. Az oldal a WCAG irányelveit figyelembe véve készül, többek között megfelelő színkontraszttal, kontraszt móddal, billentyűzetes navigációval, szemantikus HTML-struktúrával és képernyőolvasó-barát megoldásokkal. A felület támogatja a képek nagyítását, külön nyomtatási nézettel rendelkezik, valamint különböző kijelzőméreteken is reszponzív és jól használható."
          ]}

          summary={[
            "WCAG-alapú akadálymentesítés",
            "Billentyűzet- és képernyőolvasó-barát",
            "Reszponzív, letisztult UX/UI",
            "Kontraszt mód és képnagyítás",
            "Optimalizált nyomtatási nézet"
          ]}

          isAvailable={true}
          url="/"
        />
      </div>

      </main>

      <Footer />
    </>
  );
}

export default SzemelyesPortfolio;
