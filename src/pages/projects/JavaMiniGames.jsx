import "../../styles/pages/portfolio.css";

import Header from "../../components/layout/Header.jsx";
import Hero from "../../components/layout/Hero.jsx";
import ProjectShowcase from "../../components/portfolio/ProjectShowcase.jsx";
import Footer from "../../components/layout/Footer.jsx";

import minigame1 from "../../assets/images/minigame1.webp";
import minigame2 from "../../assets/images/minigame2.webp";
import minigame3 from "../../assets/images/minigame3.webp";
import minigame4 from "../../assets/images/minigame4.webp";


function JavaMiniGames() {
  return (
    <>
      <Header />

      <main>
      <Hero title="Java grafikus minijátékok" desc="Kisebb Java projektek grafikus felülettel, objektumorientált szemlélettel és játékos gyakorlási céllal." bgImg={minigame1} isProject={true} />

      <div className="container">
        <ProjectShowcase 
          images = {[minigame1, minigame2, minigame3, minigame4]}
          desc = {["A Halloween Minigame Corner egy Java és JavaFX alapú minijáték-gyűjtemény, amely több interaktív, halloween témájú játékot foglal magába modern grafikus felülettel és animált elemekkel.", "A projekt célja egy szórakoztató és látványos játékélmény létrehozása volt, miközben a fejlesztés során különböző JavaFX technológiák, eseménykezelések és grafikus megoldások kerültek alkalmazásra.", "A fejlesztés során kiemelt szerepet kapott az objektumorientált programozás, a JavaFX komponensek használata, valamint az eseménykezelés és játéklogika megvalósítása. A projekt kreatív játékfejlesztési és GUI-programozási tapasztalatokat biztosított modern Java technológiák használatával."]}
          summary = {["Labirintus játékot", "Tic-tac-toe minijátékot", "Halloween témájú animációkat", "Interaktív felhasználói felületet", "Egyedi grafikai elemeket"]}
          isAvailable={true}
          url="https://github.com/makdaniel5/minigamecorner.git"
        />

      </div>

      </main>

      <Footer />
    </>
  );
}

export default JavaMiniGames;
