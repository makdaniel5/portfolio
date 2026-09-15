
import PricesTable from "../../assets/images/arlista.png";
import ImageOpenButton from "../../tools/ImageOpenButton";

const helpTopics = [
    {
        title: "Angol nyelv",
        subtitle: "A1-C1",
        description: "Általános, üzleti és informatikai angol, érettségi és nyelvvizsga-felkészítés.",
    },
    {
        title: "Informatika",
        subtitle: "Digitális ismeretek",
        description: "Office alkalmazások, számítógépes és online ismeretek, MI használata, ICDL/ECDL, digitális kultúra érettségi.",
    },
    {
        title: "Programozás / Kódolás",
        subtitle: "Több nyelven",
        description: "C#, Java, Python, Haskell, SQL, HTML, CSS, Bootstrap és JavaScript.",
    },
];

function PricesSection() {
    return (
        <section className="prices-table">
            <div className="prices-grid">
                <ImageOpenButton src={PricesTable} alt="Árlista" caption="Árlista" className="image-open-button-inline">
                    <img className="prices-img" src={PricesTable} alt="Árlista" loading="lazy" />
                </ImageOpenButton>
                <div className="prices-info">
                    <p className="prices-highlight">Az árak 1 órás magánórákra vonatkoznak, az óradíj témakör és tudásszint alapján kerül meghatározásra.</p>

                    <h3>Miben tudok segíteni?</h3>
                    <div className="help-list">
                        {helpTopics.map((topic) => (
                            <article className="help-item" key={topic.title}>
                                <h4>{topic.title}</h4>
                                <span>{topic.subtitle}</span>
                                <p>{topic.description}</p>
                            </article>
                        ))}
                    </div>

                    <p className="prices-info-note">Előzetes egyeztetés után szintfelmérésre is van lehetőség.</p>
                </div>
            </div>
        </section>
    );
}

export default PricesSection;
