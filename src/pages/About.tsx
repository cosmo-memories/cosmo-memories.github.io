// import { Box, Card, CardContent, Stack } from "@mui/material";
import { Box, Stack } from "@mui/material";
// import { GiStarSwirl } from "react-icons/gi";
// import { PiShootingStarFill } from "react-icons/pi";
// import { TbStarsFilled } from "react-icons/tb";

import "../styles/About.css";

// const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function About() {
  return (
    <Box className="about-container">
      <Stack direction="column" spacing={0}>
        <Box className="about-section left">
          Reworking in progress, please check back in 24hrs or so.
        </Box>
      </Stack>

      {/* <Stack direction="column" spacing={0}>

        <Box className="about-section left">
          <div className="about-heading">
            <h1><GiStarSwirl /></h1>
            <h2>About Me</h2>
          </div>
          <p className="about-text-left">
             I'm <b>David</b>, a 32 years old <b>software developer</b>, <b>librarian</b>, and <b>writer</b> hailing from <b>Christchurch, New Zealand</b>, and this site is my personal page, work porfolio, pet project, and whatever else I need it to be.
          </p>
          <p className="about-text-left">
             I wrote my first HTML at age nine for my Neopets.com user profile, and have been interested in computers and coding ever since.
             I love learning, creating, organizing, and problem-solving, both in programming and artistic endeavors. I write sci-fi/fantasy fiction as well as APIs, database schema, React apps, detailed documentation, and whatever else happens to catch my interest.
             My priority right now is getting some of my full-stack projects cleaned up and hosted so I can have a more robust portfolio to show off, but I also hope to host some of my fiction writing and independent gamedev experiments in the future. Please excuse me while I grapple with my CSS demons for a while yet.
          </p>
          <p className="about-text-left">
             <b>I am actively seeking full-time entry-level software development work!</b> You can find some more information about my skills, experience, and hobbies below.
          </p>
        </Box>

        <Box className="about-section right">
          <div className="about-heading about-heading-right">
            <h2>Skills & Qualifications</h2>
            <h1><PiShootingStarFill /></h1>
          </div>
          <p className="about-text-right">
            I hold two bachelor's degrees, both from the University of Canterbury in Christchurch, New Zealand. 
            My first was a <b>Bachelor of Arts</b> majoring in <b>English</b> and minoring in <b>Media & Communcation</b>, which I earned as a young adult fresh out of high school. 
            A few years later I returned to school to pursue my other passion, and completed a <b>Bachelor of Science</b>, double majoring in <b>Computer Science</b> and <b>Mathematics</b>.
          </p>
          <p className="about-text-right">
            I have experience in a number of different languages and frameworks, specializing in <b>Java</b> and <b>JavaScript</b>. Some of my areas of experience include:
          </p>

          <div className="list-container" style={{ margin: "20px" }}>
            <Card className="list-box" elevation={1} sx={{ minHeight: 100, padding: 1 }}>
              <CardContent>
                <b>Java:</b>
                <ul className="bullet-list">
                  <li>Spring and Spring Boot</li>
                  <li>Swing</li>
                  <li>Hibernate</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="list-box" elevation={1} sx={{ minHeight: 100, padding: 1 }}>
              <CardContent>
                <b>JavaScript/TypeScript:</b>
                <ul className="bullet-list">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="list-box" elevation={1} sx={{ minHeight: 100, padding: 1 }}>
              <CardContent>
                <b>Other:</b>
                <ul className="bullet-list">
                  <li>SQL (MySQL, MariaDB, Oracle, H2, and others)</li>
                  <li>MongoDB</li>
                  <li>Cucumber</li>
                  <li>HTML/CSS</li>
                </ul>
              </CardContent>
            </Card>
          </div>


          <div className="about-text-right">
            I also have experience with <b>Python</b>, <b>C++</b>, and more, as well as working as part of a team following <b>agile methodology</b> under the <b>Scrum</b> framework!
          </div>
        </Box>

        <Box className="about-section left">
          <div className="about-heading">
            <h1><TbStarsFilled /></h1>
            <h2>Hobbies</h2>
          </div>
          <p className="about-text-left">
            I love books, computers, and anything to do with either of them!
          </p>
          <p className="about-text-left">
            I read fiction aross a range of genres, but am mainly interested in <b>science fiction</b> and <b>fantasy</b>. 
            My favorite novel is Richard Adams' <i>Watership Down</i>, but I consider Anne McCaffrey's <i>Dragonriders of Pern</i> the single most influentional series on my tastes and style as both a reader and writer. Other favorite authors include Terry Pratchett, Douglas Adams, Claire North, and Naomi Novik. 
            In my own work I like exploring themes dealing with personal identity, autonomy... and dragons. I love dragons. Put a dragon on the cover of your book and I will buy it, no questions asked. 
          </p>
          <p className="about-text-left">
            I also enjoy <b>video games</b>, especially <b>RPGs</b>. I am a particularly big fan of the <i>Final Fantasy</i> series, and am a dedicated player of <i>Final Fantasy XIV Online</i>. 
            I'm always interested to learn about the design and development process behind any game I play, and have recently begun exploring independent gamedev in my free time. I'm looking forward to having more to share about this soon!
          </p>
        </Box>

      </Stack> */}
    </Box>
  );
}

export default About;
