
import { steps } from "../../data/steps";

function StepsSection() {
    return (
        <section className="services" aria-label="Az oktatas menete">
            <h2>Az oktatás menete</h2>
            <div className="steps-grid">
                {steps.map((step) => {
                    return (
                        <article className="step" key={step.id}>
                            <span className="step-count">{step.id}</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </article>
                    )
                })}
            </div>
        </section>
        
    );
}

export default StepsSection;
