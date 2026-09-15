
import { studies } from "../../data/studies.js"
import { FaGraduationCap } from "react-icons/fa";
import ImageOpenButton from "../../tools/ImageOpenButton";

function Studies() {
    return (
            <section className="timeline" aria-label="Tanulmanyaim">
                {studies.map((study, index) => (
                    <article className="timeline-item" key={index}>
                        <div className="timeline-icon" aria-hidden="true">
                            <FaGraduationCap focusable="false" />
                        </div>

                        <div className="timeline-card">
                            <div className="timeline-text">
                                <h3>{study.title}</h3>
                                <h4>{study.institution}</h4>
                                <p>{study.description}</p>
                            </div>

                            <ImageOpenButton src={study.image} alt={study.alt} caption={study.title} className="image-open-button-inline">
                                <img src={study.image} alt={study.alt} className="timeline-img" loading="lazy"/>
                            </ImageOpenButton>
                        </div>
                    </article>
                ))}

            </section>
    );
}

export default Studies;
