import { Box, Paper, Typography } from "@mui/material";
import { GiStarSwirl } from "react-icons/gi";
import { PiShootingStarFill } from "react-icons/pi";
import { TbStarsFilled } from "react-icons/tb";

import "../styles/About.css";

function About() {
  return (
    <Box className="main-container" sx={{ px: 0 }}>
      <Box className="text-wrapper fade-in">

        {/* About Section */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              <GiStarSwirl className="star-icon" />&nbsp; About Me
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              I'm <b>David</b>, a 32 years old <b>software developer</b>, <b>librarian</b>, and <b>writer</b> hailing from <b>Christchurch, New Zealand</b>, and this site is my personal page, work porfolio, pet project, and whatever else I need it to be.
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              I wrote my first HTML at age nine for my Neopets.com user profile, and have been interested in computers and coding ever since.
              I love learning, creating, organizing, and problem-solving, both in programming and artistic endeavors. I write sci-fi/fantasy fiction as well as APIs, database schema, React apps, detailed documentation, and whatever else happens to catch my interest.
              My priority right now is getting some of my full-stack projects cleaned up and hosted so I can have a more robust portfolio to show off, but I also hope to host some of my fiction writing and independent gamedev experiments in the future. Please excuse me while I grapple with my CSS demons for a while yet.
            </Typography>
            <Typography variant="body1" component="p">
              <b>I am actively seeking full-time entry-level software development work!</b> You can find some more information about my skills, experience, and hobbies below.
            </Typography>
          </Paper>
          
          <Paper className="bounce" elevation={3}
            sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
            Image coming soon!
            {/* <img src="/images/about-me.jpg" alt="About Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
          </Paper>
        </Box>

        {/* Skills Section */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row-reverse" }, gap: 3, mb: 4 }}>
          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              <PiShootingStarFill className="star-icon" />&nbsp; Skills & Qualifications
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              I hold two bachelor's degrees, both from the University of Canterbury in Christchurch, New Zealand. 
              My first was a <b>Bachelor of Arts</b> majoring in <b>English</b> and minoring in <b>Media & Communcation</b>, which I earned as a young adult fresh out of high school. 
              A few years later I returned to school to pursue my other passion, and completed a <b>Bachelor of Science</b>, double majoring in <b>Computer Science</b> and <b>Mathematics</b>.
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              I have experience in a number of different languages and frameworks, specializing in <b>Java</b> and <b>JavaScript</b>. Some of my areas of experience include:
            </Typography>
            <ul className="bullet-list">
              <li><b>Java:</b> Spring and Spring Boot, Swing, Hibernate</li>
              <li><b>JavaScript/TypeScript:</b> React, Node.js, Express</li>
              <li><b>Other:</b> SQL (MySQL, MariaDB, Oracle, H2, and others), MongoDB, Cucumber, HTML/CSS</li>
            </ul>
            <Typography variant="body1" mt={2} component="p">
              I also have experience with <b>Python</b>, <b>C++</b>, and more, as well as working as part of a team following <b>agile methodology</b> under the <b>Scrum</b> framework!
            </Typography>
          </Paper>

          <Paper className="bounce" elevation={3}
            sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
            Image coming soon!
            {/* <img src="/images/skills.jpg" alt="Skills Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
          </Paper>
        </Box>

        {/* Hobby Section */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
          <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              <TbStarsFilled className="star-icon" />&nbsp; Hobbies
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              I love books, computers, and anything to do with either of them!
            </Typography>
            <Typography variant="body1" component="p" sx={{ mb: 2 }}>
              I read fiction aross a range of genres, but am mainly interested in <b>science fiction</b> and <b>fantasy</b>. 
              My favorite novel is Richard Adams' <i>Watership Down</i>, but I consider Anne McCaffrey's <i>Dragonriders of Pern</i> the single most influentional series on my tastes and style as both a reader and writer. Other favorite authors include Terry Pratchett, Douglas Adams, Claire North, and Naomi Novik. 
              In my own work I like exploring themes dealing with personal identity, autonomy... and dragons. I love dragons. Put a dragon on the cover of your book and I will buy it, no questions asked. 
            </Typography>
            <Typography variant="body1" component="p">
              I also enjoy <b>video games</b>, especially <b>RPGs</b>. I am a particularly big fan of the <i>Final Fantasy</i> series, and am a dedicated player of <i>Final Fantasy XIV Online</i>. 
              I'm always interested to learn about the design and development process behind any game I play, and have recently begun exploring independent gamedev in my free time. I'm looking forward to having more to share about this soon!
            </Typography>
          </Paper>

          <Paper className="bounce" elevation={3}
            sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
            Image coming soon!
            {/* <img src="/images/hobbies.jpg" alt="Hobbies Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
