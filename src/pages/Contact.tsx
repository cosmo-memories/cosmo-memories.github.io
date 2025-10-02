import { Box, Paper, Typography, Link, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { GiFallingStar } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

function Contact() {
  const theme = useTheme();
  const cardsPerView = useMediaQuery(useTheme().breakpoints.down("md")) ? 1 : 4;

  const contactItems = [
    {
      icon: <MdEmail size={40} className="star-icon" />,
      label: "Email",
      value: "Contact form coming soon!",
    },
    {
      icon: <FaGithub size={40} className="star-icon" />,
      label: "GitHub",
      value: "cosmo-memories",
      href: "https://github.com/cosmo-memories",
    },
    {
      icon: <FaLinkedin size={40} className="star-icon" />,
      label: "LinkedIn",
      value: "Coming soon!",
    },
    {
      icon: <FaTwitter size={40} className="star-icon" />,
      label: "Twitter",
      value: "@Cosmo_Memories",
      href: "https://x.com/cosmo_memories",
    },
  ];

  const totalItems = contactItems.length;
  const maxIndex = Math.max(0, totalItems - cardsPerView);

  const [index, setIndex] = useState(0);

  const handlePrev = () => { setIndex((prev) => Math.max(prev - 1, 0)) };
  const handleNext = () => { setIndex((prev) => Math.min(prev + 1, maxIndex)) };

  return (
    <Box className="main-container" sx={{ px: 0 }}>
      <Box className="text-wrapper fade-in">
        <Paper className="bounce" elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Typography variant="h4" fontWeight="bold">
              <GiFallingStar className="star-icon" /> Contact
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            If you'd like to reach out to me to discuss employment
            opportunities, my work, hobbies, or anything else, I'd be happy to
            hear from you!
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ position: "relative", width: "100%", maxWidth: {sm: 700, md: 1400 }, mx: "auto", display: "flex", alignItems: "center",
                 gap: 1, boxSizing: "border-box" }} className="fade-in">
        <IconButton onClick={handlePrev} disabled={index === 0}>
          <ArrowBackIos />
        </IconButton>

        <Box sx={{ overflow: "hidden", flex: 1 }}>
          <Box sx={{ display: "flex", transition: "transform 0.5s ease", transform: `translateX(-${(100 / totalItems) * index}%)`,
                     gap: "10px", width: `${(100 * totalItems) / cardsPerView}%`, flexWrap: "nowrap" }}>
            {contactItems.map((item, i) => (
              <Paper key={i} elevation={3}
                     sx={{ flex: `0 0 calc(${100 / totalItems}% - 10px)`, boxSizing: "border-box", p: 4, borderRadius: 3,
                           textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                {item.icon}
                <Typography variant="h6" fontWeight="bold">
                  {item.label}
                </Typography>
                {item.href ? (
                  <Link variant="body2" href={item.href} target="_blank" rel="noopener noreferrer" underline="hover"
                    color="text.secondary" sx={{ "&:hover": { color: theme.palette.secondary.main } }}>
                    {item.value}
                  </Link>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {item.value}
                  </Typography>
                )}
              </Paper>
            ))}
          </Box>
        </Box>

        <IconButton onClick={handleNext} disabled={index >= maxIndex}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Contact;
