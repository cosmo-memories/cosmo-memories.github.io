import { Box } from "@mui/material";
import { GiFallingStar } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  return (
    <Box className="contact-container">
      <Box className="text-wrapper">
        <header className="contact-header">
          <h1><GiFallingStar /> &nbsp;</h1>
          <h2 className="contact-title">Contact Me</h2>
        </header>

        <p className="contact-description">
          If you'd like to reach out to me to discuss employment opportunities, my work, or anything else, I'd be happy to hear from you!
        </p>

        <section className="contact-row">
          <h1 className="contact-icon">
            <MdEmail />
          </h1>
          <h3 className="contact-label">Email:</h3>
          <span>[ <b>redacted</b>; contact form coming soon! ]</span>
        </section>

        <section className="contact-row">
          <h1 className="contact-icon">
            <FaGithub />
          </h1>
          <h3 className="contact-label">GitHub:</h3>
          <a href="https://github.com/cosmo-memories">cosmo-memories</a>
        </section>

        <section className="contact-row">
          <h1 className="contact-icon">
            <FaLinkedin />
          </h1>
          <h3 className="contact-label">LinkedIn:</h3>
          <span>[ <b>not yet</b>; coming soon ]</span>
        </section>

        <section className="contact-row">
          <h1 className="contact-icon">
            <FaTwitter />
          </h1>
          <h3 className="contact-label">Twitter:</h3>
          <a href="https://x.com/cosmo_memories">@Cosmo_Memories</a>
        </section>
      </Box>
    </Box>
  );
}

export default Contact;
