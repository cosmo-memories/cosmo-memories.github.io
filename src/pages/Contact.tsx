import { Box } from "@mui/material";
import { GiFallingStar } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <Box style={{margin: "0", textAlign: "left", width: "100vw"}} sx={{ px: 0 }}>

    <Box style={{padding: "5%", margin: "0", textAlign: "left"}}>
    <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <GiFallingStar /> &nbsp; 
            </h1>
            <h2 style={{margin: "0"}}>
              Contact Me
            </h2>
          </div>
          <p>
        <p>
          If you'd like to reach out to me to discuss employment opportunities, my work, or anything else, I'd be happy to hear from you!
          <br />
          (Somehow, even this page is a work in progress. Yes, I know it's broken on mobile right now.)
        </p>
        < br />
        <p>
      <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <MdEmail /> &nbsp; 
            </h1>
            <h3 style={{margin: "0"}}>
              Email: &nbsp;
            </h3>
            [ &nbsp;<b>redacted</b>&nbsp; ] [ contact form coming soon! ]
          </div>
      </p>

      <p>
      <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <FaGithub /> &nbsp; 
            </h1>
            <h3 style={{margin: "0"}}>
              GitHub: &nbsp;
            </h3>
            <a href="https://github.com/cosmo-memories">cosmo-memories</a> &nbsp; [ you're already here! ]
          </div>
      </p>

      <p>
      <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <FaLinkedin /> &nbsp; 
            </h1>
            <h3 style={{margin: "0"}}>
              LinkedIn: &nbsp;
            </h3>
            [ &nbsp;<b>not yet</b>&nbsp; ] [ coming soon ]
          </div>
      </p>

      <p>
      <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <FaTwitter /> &nbsp; 
            </h1>
            <h3 style={{margin: "0"}}>
              Twitter: &nbsp;
            </h3>
            <a href="https://x.com/cosmo_memories">@Cosmo_Memories</a> &nbsp; [ inactive ]
          </div>
      </p>

      </p>
      </Box>
      </Box>
  )
}

export default Contact;