import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));

const TanulasiEsOktatasiPlatform = lazy(() =>
  import("./pages/projects/TanulasiEsOktatasiPlatform.jsx")
);

const TanuljMegTanulni = lazy(() =>
  import("./pages/projects/TanuljMegTanulni.jsx")
);

const JavaMiniGames = lazy(() =>
  import("./pages/projects/JavaMiniGames.jsx")
);

const KoreaiUtazas = lazy(() =>
  import("./pages/projects/KoreaiUtazas.jsx")
);

const LBWCikk = lazy(() =>
  import("./pages/projects/LBWCikk.jsx")
);

const DijnyertesPoszter = lazy(() =>
  import("./pages/projects/DijnyertesPoszter.jsx")
);

const TDK = lazy(() =>
  import("./pages/projects/TDK.jsx")
);

const SzemelyesPortfolio = lazy(() =>
  import("./pages/projects/SzemelyesPortfolio.jsx")
);

const DigitalisTananyagtar = lazy(() =>
  import("./pages/projects/DigitalisTananyagtar.jsx")
);


function App() {
  return (
    <Suspense fallback={<div>Betöltés...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-tanulasi-es-oktatasi-platform" element={<TanulasiEsOktatasiPlatform />} />
        <Route path="/project-tanulj-meg-tanulni" element={<TanuljMegTanulni />} />
        <Route path="/project-java-minijatekok" element={<JavaMiniGames />} />
        <Route path="/project-koreai-utazas" element={<KoreaiUtazas />} />
        <Route path="/project-tudomanyos-cikk" element={<LBWCikk />} />
        <Route path="/project-dijnyertes-poszter" element={<DijnyertesPoszter />} />
        <Route path="/project-tdk-ai-tanulastamogatas" element={<TDK />} />
        <Route path="/project-szemelyes-portfolio" element={<SzemelyesPortfolio />} />
        <Route path="/project-digitalis-angol-tananyagtar" element={<DigitalisTananyagtar />} />
      </Routes>
    </Suspense>
  );
}

export default App;