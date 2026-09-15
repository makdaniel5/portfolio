
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaHandshake,
  FaPaperPlane,
} from "react-icons/fa";

const icons = {
  calendar: FaCalendarAlt,
  chalkboardTeacher: FaChalkboardTeacher,
  handshake: FaHandshake,
  paperPlane: FaPaperPlane,
};

function QuickActionCard({ title, href, iconKey, external }) {
  const Icon = icons[iconKey];
  const content = (
    <>
      {Icon && <Icon aria-hidden="true" focusable="false" />}
      <span className="quick-action-title">{title}</span>
    </>
  );

  if (!external) {
    return (
      <Link className="quick-action-card" to={href} aria-label={title}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className="quick-action-card"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={title}
    >
        {content}
    </a>
  );
}

export default QuickActionCard;
