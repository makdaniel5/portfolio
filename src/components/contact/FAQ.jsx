
import { faqs } from "../../data/faqs.js";


function FAQ() {
    return (
            <section className="faq-container" aria-label="Gyakori kerdesek">
                <h2>Gyakori kérdések</h2>
                <div className="faqs-container">
                    {faqs.map((faq) => {
                        return (
                            <details key={faq.question} className="faq-card">
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        )
                    })}
                </div>
            </section>
    )
}

export default FAQ;
