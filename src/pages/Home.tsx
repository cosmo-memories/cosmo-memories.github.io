import { FaStar, FaRegStar } from "react-icons/fa"
import { Box, Paper, Typography } from "@mui/material";
import { BsStars } from "react-icons/bs";

import '../styles/Home.css';

function Home() {
  return (
    <Box className="main-container" sx={{ px: 0 }}>
      <Box className="text-wrapper fade-in">

        <Paper className="bounce" elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
          <Box className="main-header" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h4" component="h2" fontWeight="bold">
              <BsStars className="star-icon" />&nbsp; Hi! You've reached David!
            </Typography>
          </Box>

          <Typography variant="body1" mt={2}>
            I do <b>backend-focused</b>, full-stack software and web development; my main areas of interest are API programming and database design/management.
          </Typography>
          <Typography variant="body2" mt={1} color="text.secondary">
            This personal page and portfolio are a <b>work in progress</b>! Many assets, including most of this very text, are missing or placeholders. Some elements of the layout may work improperly, especially on mobile devices.
          </Typography>
        </Paper>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
          <Paper className="bounce" elevation={2} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              <FaStar className="star-icon" />&nbsp; Latest Updates:
            </Typography>
            <ul className="bullet-list">
              <li><b>2/10/25:</b> Reworked contact page layout; not entirely happy, might redo again later.</li>
              <li><b>30/09/25:</b> Reworked main page layout! Working on layout consistency between pages.</li>
              <li><b>21/09/25:</b> Rewrote most site text; some still needs work but there should be no more lorem ipsum.</li>
              <li><b>18/09/25:</b> Reworked project page cards in preparation for adding content.</li>
              <li><b>01/09/25:</b> Finished refactoring styling. Working on mobile responsiveness and layout finetuning.</li>
            </ul>
          </Paper>

          <Paper className="bounce" elevation={2} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              <FaStar className="star-icon" />&nbsp; TODO:
            </Typography>
            <ul className="bullet-list">
              <li>Redesign contacts page and ensure details are up to date</li>
              <li>Source images as needed, incl. backgrounds</li>
              <li>Host and add material to 'Projects' section</li>
              <li>Decide on custom URL and move to independent hosting</li>
              <li>New updates section to list all the changes being made!</li>
            </ul>
          </Paper>
        </Box>

        <Paper className="bounce" elevation={2} sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
          <Box sx={{ fontSize: "1.2rem", mb: 1 }}>
            <FaRegStar className="star-icon" /> <FaStar className="star-icon" /> <FaRegStar className="star-icon" />
          </Box>
            <Typography variant="body2">
              This site is built with <b>Vite</b> + <b>React</b> in <b>TypeScript</b>, and styled with <b>Material UI</b>.
            </Typography>
            <Typography variant="body2" mt={1}>
              <b>Image attributions:</b> [ coming soon — there are no images yet! ]
            </Typography>
          <Box sx={{ fontSize: "1.2rem", mt: 1 }}>
            <FaRegStar className="star-icon" /> <FaStar className="star-icon" /> <FaRegStar className="star-icon" />
          </Box>
        </Paper>

      </Box>
    </Box>
  )
}

export default Home;