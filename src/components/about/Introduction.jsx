import Portrait from "../../assets/images/Profilkép.webp"
import { FaBullseye, FaHandshake, FaUser } from "react-icons/fa";
import ImageOpenButton from "../../tools/ImageOpenButton";

function Introduction() {
    return (
            <section className="introduction" aria-label="Rolam roviden">
                <div className="introduction-main">
                    <ImageOpenButton src={Portrait} alt="Fénykép Mák Dánielről" caption="Mák Dániel portréja" className="image-open-button-inline">
                        <img src={Portrait} alt="Fénykép Mák Dánielről" className="introduction-img" loading="lazy"/>
                    </ImageOpenButton>
                    <div className="introduction-text">
                        <h2>Rólam röviden</h2>
                        <p>
                            20 éves egyetemi hallgatóként jelenleg az Eötvös Loránd Tudományegyetemen tanulok, ahol informatikai tudásomat folyamatosan fejlesztem. Az angol nyelv általános iskolás korom óta fontos szerepet játszik az életemben, és célom, hogy érthető, gyakorlati segítséget nyújtsak azoknak, akik angolból, programozásból vagy webfejlesztésből szeretnének fejlődni.
                        </p>
                    </div>
                </div>
                <div className="introduction-pros">
                    <div className="introduction-pros-grid">
                        <article className="introduction-pro">
                            <div className="introduction-pro-header">
                                <FaUser aria-hidden="true" focusable="false" />
                                <h3>Személyre szabott</h3>
                            </div>
                            <p>Minden diáknak mások a céljai és az előzetes tudása, ezért az órák felépítését mindig ezekhez igazítom.</p>
                        </article>
                        <article className="introduction-pro">
                            <div className="introduction-pro-header">
                                <FaBullseye aria-hidden="true" focusable="false" />
                                <h3>Gyakorlatközpontúság</h3>
                            </div>
                            <p>Valódi feladatokon és életszerű példákon keresztül sajátítjuk el az anyagot.</p>
                        </article>
                        <article className="introduction-pro">
                            <div className="introduction-pro-header">
                                <FaHandshake aria-hidden="true" focusable="false" />
                                <h3>Támogató hozzáállás</h3>
                            </div>
                            <p>Nyugodt, barátságos légkört teremtek, ahol kérdezni mindig lehet, és a hibák a fejlődés részét jelentik.</p>
                        </article>
                    </div>
                </div>
            </section>
    );
}

export default Introduction;
