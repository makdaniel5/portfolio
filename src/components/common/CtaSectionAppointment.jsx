
import { Link } from "react-router-dom";

function CtaSectionAppointment() {
    return (
        <section className="cta">
            <h2>Szeretnél versenyképes tudásra szert tenni?</h2>
            <Link to="https://cal.com/makdaniel">Időpontfoglalás</Link>
        </section>
    );
}

export default CtaSectionAppointment;
