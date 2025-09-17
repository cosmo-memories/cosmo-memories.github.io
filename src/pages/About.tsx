import { Box, Stack } from "@mui/material";
import { GiStarSwirl } from "react-icons/gi";
import { PiShootingStarFill } from "react-icons/pi";
import { TbStarsFilled } from "react-icons/tb";

import "../styles/About.css";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function About() {
  return (
    <Box className="about-container">
      <Stack direction="column" spacing={0}>

        <Box className="about-section left">
          <div className="about-heading">
            <h1><GiStarSwirl /> &nbsp;</h1>
            <h2>About Me</h2>
          </div>
          <p className="about-text-left">
             Hey there! I'm <b>David</b>, I hail from Christchurch, New Zealand, my pronouns are he/him, etc etc. I find writing about myself really embarrassing and weird, so this text is mostly a stream-of-consciousness placeholder for now. 
             Don't worry about it.
          </p>
          <p className="about-text-left">
             I wrote my first HTML at age nine for my Neopets user profile. It's up for debate if my coding skills have increased at all since then. 
             I love learning, creating, and problem-solving, both in programming and artistic endeavors. I write sci-fi/fantasy fiction as well as Node.js APIs and the most montsrous SQL statements you've ever seen. 
             My priority right now is getting some backend dev projects up so I can have something approximating a portfolio, but I hope to host some of my fiction in the future. Please excuse me while I grapple with my CSS demons for a while yet.
          </p>
          <p className="about-text-left">
             This box is very large to allow me to write a lot about how cool and totally not a dweeb I am and also include a photo of my big dumb face once I actually add some images to this page. 
             Scroll down to find some more half-written information about my skills and hobbies.
          </p>
        </Box>

        <Box className="about-section right">
          <div className="about-heading about-heading-right">
            <h2>Skills & Qualifications</h2>
            <h1>&nbsp; <PiShootingStarFill /></h1>
          </div>
          <p className="about-text-right">
            Just kidding, it's all lorem ipsum. Stay tuned.
          </p>
          <p className="about-text-right">
            {loremIpsum}
          </p>
        </Box>

        <Box className="about-section left">
          <div className="about-heading">
            <h1><TbStarsFilled /> &nbsp;</h1>
            <h2>Hobbies</h2>
          </div>
          <p className="about-text-left">
            I love lorem ipsum and the critically acclaimed MMORPG Final Fantasy XIV.
          </p>
          <p className="about-text-left">
            {loremIpsum}
          </p>
        </Box>

      </Stack>
    </Box>
  );
}

export default About;
