
import { Link } from "react-router-dom";

function CtaSectionCollab() {
    return (
        <section className="cta">
            <h2>Szeretnél együtt dolgozni?</h2>
            <Link to="/contact">Kapcsolatfelvétel</Link>
        </section>
    );
}

export default CtaSectionCollab;
