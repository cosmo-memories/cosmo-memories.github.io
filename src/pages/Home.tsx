import { FaStar, FaRegStar } from "react-icons/fa"
import { Box } from "@mui/material";
import { BsStars } from "react-icons/bs";

function Home() {
  return (
    <Box style={{margin: "0", textAlign: "left", width: "100vw"}} sx={{ px: 0 }}>

      <Box style={{padding: "5%", margin: "0", textAlign: "left"}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <BsStars /> &nbsp; 
            </h1>
            <h2 style={{margin: "0"}}>
              Hi! You've reached David!
            </h2>
          </div>
          <p style={{maxWidth: "70%"}}>
          
        <p>
          I do full-stack web development, with focus on the backend; my main areas of interest are API programming and database design/management.
          <br />
          This personal page is a <b>work in progress</b>! Many assets, including most of this very text, are missing or placeholders. 
          <br />
          Some elements of the layout may work improperly, especially on mobile devices.
        </p>
        <p>
          <b>TODO:</b>
          <br />
          <ul>
            <li>Write and implement all site copy</li>
            <li>Source images as needed, incl. backgrounds</li>
            <li>Host and add material to 'Projects' section</li>
            <li>Improve responsiveness of layout across devices</li>
            <li>Decide on custom URL and move to independent hosting</li>
            <li>General code cleanup</li>
          </ul> 
        </p>
        <FaRegStar /> <FaStar /> <FaRegStar />
        <p>
            This site is built with React, written in Typescript, and uses components from the Material UI library.
            <br />
            <b>Image attributions:</b> [ coming soon ] [ there are no images yet! ]
        </p>
        <FaRegStar /> <FaStar /> <FaRegStar />
          </p>
        </Box>
        </Box>
/* 
    <Container>
        <h1>
            <GiStarSwirl />
        </h1>
        <Paper square variant="outlined" elevation={20} style={{padding: "30px"}}>
        <h3>
            Hi! You've reached Cosmo!
        </h3>
        <p>
            I do backend (and frontend) web development, database design and management, writing, mathematics, and other cool things on the internet.
            <br />
            Take a look at my projects and learn more about my skills by browsing the links above!
        </p>
        <p>
            This site is built with React, Typescript, and the Material UI library.
        </p>
        <FaRegStar /> <FaStar /> <FaRegStar />
        </Paper>
    </Container> */
  )
}

export default Home;