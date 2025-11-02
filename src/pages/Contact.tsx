import { Box, Paper, Typography, Link, useTheme } from "@mui/material";
import { GiFallingStar } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Contact() {
  const theme = useTheme();

  return (
    <Box className="main-container" sx={{ px: 0 }}>
      <Box className="text-wrapper fade-in">
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              <GiFallingStar className="star-icon" /> Contact
            </Typography>
            <Typography variant="body1" component="p">
              If you'd like to reach out to me to discuss employment opportunities, 
              my work, hobbies, or anything else, I'd be happy to hear from you!
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3, textAlign: "center" }}>
            <MdEmail size={40} className="star-icon" />
            <Typography variant="h6" fontWeight="bold">
              Email
            </Typography>
            <Link variant="body2" target="_blank" rel="noopener noreferrer" underline="none" color="text.secondary">
              Contact form coming soon!
            </Link>
          </Paper>

          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3, textAlign: "center" }}>
            <FaGithub size={40} className="star-icon" />
            <Typography variant="h6" fontWeight="bold">
              GitHub
            </Typography>
            <Link variant="body2" href="https://github.com/cosmo-memories" target="_blank" rel="noopener noreferrer" underline="hover"
                  color="text.secondary" sx={{ "&:hover": { color: theme.palette.secondary.main } }}>
              cosmo-memories
            </Link>
          </Paper>

          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3, textAlign: "center" }}>
            <FaLinkedin size={40} className="star-icon" />
            <Typography variant="h6" fontWeight="bold">
              LinkedIn
            </Typography>
            <Link variant="body2" target="_blank" rel="noopener noreferrer" underline="none" color="text.secondary">
              Coming soon!
            </Link>
          </Paper>

          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3, textAlign: "center" }}>
            <FaTwitter size={40} className="star-icon" />
            <Typography variant="h6" fontWeight="bold">
              Twitter
            </Typography>
            <Link variant="body2" href="https://x.com/cosmo_memories" target="_blank" rel="noopener noreferrer" underline="hover"
                  color="text.secondary" sx={{ "&:hover": { color: theme.palette.secondary.main } }}>
              @Cosmo_Memories
            </Link>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
