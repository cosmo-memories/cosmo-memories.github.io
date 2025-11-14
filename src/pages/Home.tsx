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
              <li><b>14/11/25:</b> Added some screenshots and placeholder text for the Soccer Sim project.</li>
              <li><b>11/11/25:</b> Added some details about FullStacks DB schema to the Projects section.</li>
              <li><b>10/11/25:</b> Started adding some information to Projects section at last!</li>
              <li><b>2/11/25:</b> Redesigned Contact page again! Mostly happy with design for now.</li>
              <li><b>1/11/25:</b> Redesigned the About page; just needs some images!</li>
            </ul>
          </Paper>

          <Paper className="bounce" elevation={2} sx={{ flex: 1, p: 4, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              <FaStar className="star-icon" />&nbsp; TODO:
            </Typography>
            <ul className="bullet-list">
              <li>General code cleanup and optimization</li>
              <li>Add images as needed to the About and Projects pages</li>
              <li>Host and add material to Projects section</li>
              <li>Decide on custom URL and move to independent hosting</li>
              <li>New Updates section to list all the changes being made!</li>
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
            {/* <Typography variant="body2" mt={1}>
              <b>Image attributions:</b> [ coming soon — there are no images yet! ]
            </Typography> */}
          <Box sx={{ fontSize: "1.2rem", mt: 1 }}>
            <FaRegStar className="star-icon" /> <FaStar className="star-icon" /> <FaRegStar className="star-icon" />
          </Box>
        </Paper>

      </Box>
    </Box>
  )
}

export default Home;