
import { contacts } from "../../data/contacts.js";
import {
    FaCalendarAlt,
    FaEnvelope,
    FaGlobe,
    FaLinkedinIn,
    FaPhone,
    FaRegCommentDots,
} from "react-icons/fa";

const icons = {
    calendar: FaCalendarAlt,
    email: FaEnvelope,
    linkedin: FaLinkedinIn,
    phone: FaPhone,
};

function FormSection() {
    return (
            <section className="contact-section" aria-label="Kapcsolat">
                <section className="contact-info" aria-label="Elerhetosegeim">
                    <h2>Elérhetőségeim</h2>
                    {contacts.map((contact) => {
                        const Icon = icons[contact.iconKey];

                        return (
                            <a key={contact.content} href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-box">
                                {Icon && <Icon aria-hidden="true" focusable="false" />}
                                <span>{contact.content}</span>
                            </a>
                        )
                    })}

                    <div className="infos">
                        <article className="info">
                            <h3>
                                <FaGlobe aria-hidden="true" focusable="false" />
                                <span>Online órák bárhonnan</span>
                            </h3>
                            <p>Az órák online zajlanak, így bárhonnan kényelmesen csatlakozhatsz.</p>
                        </article>
                        <article className="info">
                            <h3>
                                <FaRegCommentDots aria-hidden="true" focusable="false" />
                                <span>Gyors válasz</span>
                            </h3>
                            <p>Általában 12 órán belül válaszolok az üzenetekre.</p>
                        </article>
                    </div>
                    
                </section>
                <section className="contact-form" aria-label="Uzenet kuldese">
                    <h2>Írj üzenetet!</h2>
                    <form action="mailto:mak.daniel.tanar@gmail.com" method="post">
                        <div className="contact-form-group">
                            <label htmlFor="name">Név</label>
                            <input type="text" name="name" id="name" maxLength={40} required/>
                        </div>

                        <div className="contact-form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" maxLength={40} required/>
                        </div>
                        
                        <fieldset>
                            <legend>Tárgy</legend>
                            <label htmlFor="subject-lesson">
                                <input type="radio" name="subject" id="subject-lesson" defaultChecked value="magánóra"/>

                                 Magánóra
                            </label>
                            <label htmlFor="subject-collab">
                                <input type="radio" name="subject" id="subject-collab" value="együttműködés"/>

                                 Együttműködés
                            </label>
                        </fieldset>

                        <div className="contact-form-group">
                            <label htmlFor="message">Üzenet</label>
                            <textarea id="message" name="message" rows={6} maxLength={1200} required />
                        </div>

                        <label htmlFor="consent" className="contact-form-consent">
                            <input type="checkbox" name="consent" id="consent" required/>
                            <span>Elfogadom az adatkezelést*</span>
                        </label>
        
                        <button type="submit">Üzenet küldése</button>
                    </form>
                </section>
            </section>
    )
}

export default FormSection;
