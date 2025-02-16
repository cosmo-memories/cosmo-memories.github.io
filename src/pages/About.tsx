import { Box, Stack } from "@mui/material";
import { GiStarSwirl } from "react-icons/gi"
import { PiShootingStarFill } from "react-icons/pi"
import { TbStarsFilled } from "react-icons/tb"

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// <Paper square variant="outlined" style={{padding: "10px", textAlign: "left", minHeight: "100vh"}}>

function About() {
  return (
    <Box style={{margin: "0", textAlign: "left", width: "100vw"}} sx={{ px: 0 }}>
      <Stack direction="column" spacing={0} style={{margin: "0"}}>

        <Box style={{padding: "5%", margin: "0", textAlign: "left", minHeight: "100vh", background: 'linear-gradient(#0b0b0c, #222227)'}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <GiStarSwirl /> &nbsp; 
            </h1>
            <h2 style={{margin: "0"}}>
              About Me
            </h2>
          </div>
          <p style={{maxWidth: "70%"}}>
            Hey there! I'm <b>David</b>, I hail from Christchurch, New Zealand, my pronouns are he/him, etc etc. I find writing about myself really embarrassing and weird, so this text is mostly a stream-of-consciousness placeholder for now. 
            Don't worry about it.
            <p />
            I wrote my first HTML at age nine for my Neopets user profile. It's up for debate if my coding skills have increased at all since then. 
            I love learning, creating, and problem-solving, both in programming and artistic endeavors. I write sci-fi/fantasy fiction as well as Node.js APIs and the most montsrous SQL statements you've ever seen. 
            My priority right now is getting some backend dev projects up so I can have something approximating a portfolio, but I hope to host some of my fiction in the future. Please excuse me while I grapple with my CSS demons for a while yet.
            <p />
            This box is very large to allow me to write a lot about how cool and totally not a dweeb I am and also include a photo of my big dumb face once I actually add some images to this page. 
            Scroll down to find some more half-written information about my skills and hobbies.
          </p>
        </Box>

        <Box style={{padding: "5%", textAlign: "right", minHeight: "100vh", background: 'linear-gradient(#0b0b0c, #222227)'}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <h2 style={{marginRight: 0, marginLeft: "auto"}}>
              Skills & Qualifications
            </h2>
            <h1 style={{margin: 0}}>
              &nbsp; <PiShootingStarFill />
            </h1>
          </div>
          <p style={{maxWidth: "70%", marginRight: 0, marginLeft: "auto"}}>
            Just kidding, it's all lorem ipsum. Stay tuned.
            <p />
            {loremIpsum}
          </p>
        </Box>

        <Box style={{padding: "5%", textAlign: "left", minHeight: "100vh", background: 'linear-gradient(#0b0b0c, #222227)'}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{margin: "0"}}>
              <TbStarsFilled /> &nbsp; 
            </h1>
            <h2 style={{margin: "0"}}>
              Hobbies
            </h2>
          </div>
          <p style={{maxWidth: "70%"}}>
            I love lorem ipsum and the critically acclaimed MMORPG Final Fantasy XIV.
            <p />
            {loremIpsum}
          </p>
        </Box>

      </Stack>
    </Box>
  )
}

export default About;