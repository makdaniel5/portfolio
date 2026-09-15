
import { services } from "../../data/services.js";
import ImageOpenButton from "../../tools/ImageOpenButton";

function ServicesSection() {
    return (
        <section className="services" aria-label="Szakteruleteim">
            <h2>Szakterületeim</h2>
            <div className="services-grid">
                {services.map((service, index) => {
                    return (
                        <article className="service" key={index}>
                            <h3>{service.title}</h3>
                            <ImageOpenButton src={service.image} alt={service.alt} caption={service.title}>
                                <img src={service.image} alt={service.alt} className="service-img" loading="lazy"/>
                            </ImageOpenButton>
                            <p>{service.desc}</p>
                        </article>
                    )
                })}
            </div>
        </section>
        
    );
}

export default ServicesSection;
