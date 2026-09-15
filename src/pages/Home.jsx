import "../styles/pages/home.css";

import Header from "../components/layout/Header.jsx";
import Hero from "../components/layout/Hero.jsx";
import QuickActions from "../components/home/QuickActions";
import VideoSection from "../components/home/VideoSection";
import ReviewsCarousel from "../components/home/ReviewsCarousel";
import FieldsAside from "../components/home/FieldsAside";
import Footer from "../components/layout/Footer.jsx";
import CtaSectionServices from "../components/common/CtaSectionServices.jsx";
import ProjectsSection from "../components/home/ProjectsSection";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero title = {["Tapasztalat.", "Tudás.", "Tanulás."]} desc = "Üdvözöllek! Mák Dániel vagyok, magántanár és ELTE hallgató. Segítek átlátható, gyakorlatias módon fejlődni."/>

        <QuickActions />
        
        <div className="container">

          <VideoSection />

        </div>

        <section className="persuasion">
          <ReviewsCarousel />
          <FieldsAside />
        </section>

        <CtaSectionServices />
        <ProjectsSection />

      </main>

      <Footer />
    </>
  );
}

export default Home;
