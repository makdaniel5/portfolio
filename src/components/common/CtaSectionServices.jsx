
import { Link } from "react-router-dom";

function CtaSection() {
    return (
        <section className="cta">
            <h2>Tanulj célzottan, gyakorlatiasan, emberi tempóban.</h2>
            <Link to="/services">Szolgáltatások</Link>
        </section>
    );
}

export default CtaSection;
