import { FaStar, FaRegStar } from "react-icons/fa"
import { Box } from "@mui/material";
import { BsStars } from "react-icons/bs";

import '../styles/Home.css';

function Home() {
  return (
    <Box className="main-container" sx={{ px: 0 }}>
      <Box className="text-wrapper">
        <div className="main-header">
          <h1 className="subheader">
            <BsStars /> &nbsp; 
          </h1>
          <h2 className="subheader">
            Hi! You've reached David!
          </h2>
        </div>

        <p className="description">
          <p>
            I do <b>backend-focused</b>, full-stack software and web development; my main areas of interest are API programming and database design/management.
            <br />
            This personal page and portfolio are a <b>work in progress</b>! Many assets, including most of this very text, are missing or placeholders. 
            <br />
            Some elements of the layout may work improperly, especially on mobile devices.
          </p>

          <p>
            <b>Latest Updates:</b>
            <br />
            <ul className="bullet-list">
              <li><b>21/09/25:</b> Rewrote most site text; some still needs work but there should be no more lorem ipsum.</li>
              <li><b>18/09/25:</b> Reworked project page cards in preparation for adding content.</li>
              <li><b>01/09/25:</b> Finished refactoring styling. Working on mobile responsiveness and general layout finetuning.</li>
              <li><b>16/08/25:</b> The revival begins! Began refactoring pages to remove inline styling. Most of this page will be retooled or replaced.</li>
            </ul> 
          </p>

          <p>
            <b>TODO:</b>
            <br />
            <ul className="bullet-list">
              <li>Redesign contacts page and ensure details are up to date</li>
              <li>Source images as needed, incl. backgrounds</li>
              <li>Host and add material to 'Projects' section</li>
              <li>Improve responsiveness of layout across devices</li>
              <li>Decide on custom URL and move to independent hosting</li>
              <li>General code cleanup, incl. benign console errors</li>
              <li>New updates section to list all the changes being made!</li>
            </ul> 
          </p>

          <FaRegStar /> <FaStar /> <FaRegStar />
          <p>
              This site is built with Vite and React, written in Typescript, and uses components from the Material UI library.
              <br />
              <b>Image attributions:</b> [ coming soon -- there are no images yet! ]
          </p>
          <FaRegStar /> <FaStar /> <FaRegStar />
        </p>
      </Box>
    </Box>
  )
}

export default Home;