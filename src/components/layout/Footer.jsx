import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  	return (
    <footer>
      <nav className="socials" aria-label="Kozossegi oldalak">
        <a
			href="https://www.facebook.com/mak.daniel.tanar/"
			target="_blank"
			rel="noopener noreferrer"
			className="social-link"
			aria-label="Facebook"
        >
          	<FaFacebookF aria-hidden="true" focusable="false" />
        </a>
        <a
			href="https://www.linkedin.com/in/makdaniel/"
			target="_blank"
			rel="noopener noreferrer"
			className="social-link"
			aria-label="LinkedIn"
        >
          	<FaLinkedinIn aria-hidden="true" focusable="false" />
        </a>
        <a
			href="https://www.instagram.com/makdanieltanar/"
			target="_blank"
			rel="noopener noreferrer"
			className="social-link"
			aria-label="Instagram"
        >
          	<FaInstagram aria-hidden="true" focusable="false" />
        </a>
        <a
			href="https://github.com/makdaniel5"
			target="_blank"
			rel="noopener noreferrer"
			className="social-link"
			aria-label="GitHub"
        >
          	<FaGithub aria-hidden="true" focusable="false" />
        </a>
        <a
			href="https://www.tiktok.com/@makdanieltanar/"
			target="_blank"
			rel="noopener noreferrer"
			className="social-link"
			aria-label="TikTok"
        >
          	<FaTiktok aria-hidden="true" focusable="false" />
        </a>
        <a
          	href="https://discord.gg/2aQtEb5PYb"
			target="_blank"
			rel="noopener noreferrer"
			className="social-link"
			aria-label="Discord"
        >
          	<FaDiscord aria-hidden="true" focusable="false" />
        </a>
      </nav>
      <p>&copy; 2026 Mák Dániel - Minden jog fenntartva.</p>
    </footer>
  );
}

export default Footer;
