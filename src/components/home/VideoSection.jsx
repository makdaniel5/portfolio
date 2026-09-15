
import { Link } from "react-router-dom";
import introVideo from '../../assets/videos/Mak_Daniel.mp4';
import videoPoster from '../../assets/images/video-poster.webp';
import introCaptions from '../../assets/captions/mak-daniel-felirat.vtt?url';
import introCaptionsEN from '../../assets/captions/mak-daniel-captions-en.vtt?url';

function VideoSection() {
    return (
        <section className="video">
            <div className="video-source">
                <video 
                    controls 
                    preload="metadata" 
                    poster={videoPoster}
                >
                    <source src={introVideo} type="video/mp4" />

                    <track
                        src={introCaptions}
                        kind="captions"
                        srcLang="hu"
                        label="Magyar"
                        default
                    />

                    <track
                        src={introCaptionsEN}
                        kind="captions"
                        srcLang="en"
                        label="English"
                    />

                    A böngésződ nem támogatja a videó lejátszását.
                </video>
            </div>
            <div className="video-text">
                <h2>Bemutatkozó videó</h2>
                <p>
                    20 éves egyetemi hallgatóként jelenleg az Eötvös Loránd Tudományegyetemen tanulok, ahol informatikai tudásomat folyamatosan fejlesztem. Angol nyelvi és általános iskolás korom óta fontos szerepet játszik az életemben, és célom, hogy érthető, gyakorlati segítséget nyújtsak azoknak, akik angolból, programozásból vagy webfejlesztésből szeretnének fejlődni.
                </p>
                <Link className="text-button" to="/about">Tudj meg többet rólam</Link>
            </div>
            <details className="video-transcript">
                    <summary>A videó teljes szöveges leírása</summary>
                    <p>
                        Az első jelenetben Mák Dániel egy kanapén ül nyugodt, kellemes környezetben. A kamerába nézve beszél, miközben a háttér letisztult és barátságos hangulatot teremt. A videó elején elmondja: „Érdekel az angol, az informatika vagy a statisztika? Elmélyítenéd tudásodat, vagy netalántán gyakorlásra van szükséged? Mák Dániel vagyok, az ELTE programtervező informatikus hallgatója.”
                    </p>
                    <p>
                        A második jelenetben egy asztalnál ülve online órát tart. Könyvek hevernek az asztalon, miközben digitális rajztáblára rajzol és magyaráz. A székben ülve tovább beszél: „Angolból törekszem arra, hogy a való életben hasznosítható tudásra tehess szert gyakorlati szituációkon és életszerű példákon keresztül.”
                    </p>
                    <p>
                        A harmadik jelenetben programozás közben látható. Informatikai tartalmak jelennek meg monitoron és tableten, először háttal ül a kamerának, majd megfordul és folytatja: „Informatikából pedig a programozásban, a webfejlesztésben, az irodai alkalmazások kezelésében vagy akár adatbáziskezelésben tudok kiváló segítséget nyújtani.”
                    </p>
                    <p>
                        A negyedik jelenetben egy székre ül le, miközben lapokat dob az asztalra. Ezután a statisztikai elemzésekről és kutatásokról beszél: „Amennyiben kutatásban van szükséged segítségre, statisztikai elemzésben is számíthatsz rám. Disszertációk, TDK munkák és tudományos cikkek esetén egyaránt.”
                    </p>
                    <p>
                        Az utolsó jelenetben ismét a kanapén ülve látható. Elköszön a nézőktől, majd a videó végén elmondja: „Ha személyben a megoldáshoz vezető kalauzra találtál, ne késlekedj felvenni velem a kapcsolatot.”
                    </p>
            </details>
        </section>
    );
}

export default VideoSection;
