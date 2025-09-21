import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Paper, Stack, Typography } from "@mui/material";
import { ProjectCardProps } from "../types/Projects";
import '../styles/Projects.css';

import { FaRegStar, FaStar } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

const projectData = [
  {
    title: "Collabrick (formerly Home Helper)",
    description: "A communication and budget tracking app for DIY enthusiasts, featuring real-time chat rooms and a friendly LLM chatbot to help users manage their time and money. A full-stack application built in Java Spring, Collabrick was developed under the scrum framework over the course of a year as part of a 7-person agile team during my BSc study.",
    note: "Links, documentation, and details coming by the end of next week!",
  },
  {
    title: "FullStacks: A Book Journal",
    description: "A full-stack MERN project for playing with NoSQL databases and API design, in the form of a personal reading log where I record and track my reading habits. Check out the documentation for a full overview of API and database design decisions, and lots of chatter about the development process.",
    note: "NOTE: FullStacks is currently offline until I sort out new hosting for the API. Hopefully this will happen before the end of October. Sorry!",
  },
  {
    title: "Daguerreo: Mathematics Notes & Reference",
    links: [
      { label: "VISIT", href: "https://cosmo-memories.github.io/math/" },
      { label: "ABOUT", href: "https://cosmo-memories.github.io/math/about.html" }
    ],
    description: "A small archive of math notes on a variety of topics from my time at university. Daguerreo is a static HTML site built with Jekyll and hosted on Github Pages, and should be considered a low-priority, perpetual work in pogress; I am summarizing and uploading things as I have the time.",
  },
  {
    title: "Coming Soon: Memoria Blog 2.0",
    description: "Coming very soon, a full-stack personal blog platform to replace my old Jekyll blog! There will be posts about my dev journey, and maybe video games and other stuff. Memoria 2.0 is planned to be fully handmade with a React frontend, REST API using Node.js and Express, and a relational database for post storage. Expect a prototype by the end of 2025!",
  }
];

function MuiCard({ title, description, links = [], note}: ProjectCardProps) {

  const getLinkByLabel = (label: string) => links.find((link) => link.label === label);
  const LINK_LABELS = ["VISIT", "ABOUT", "DOCUMENTATION"];

  return(
  <Card sx ={{ width: { xs: "100%" }, height: { md: 250 } }} className="single-card">
    <CardMedia image=""></CardMedia>
    {/* TODO: Images */}
    <CardContent className="card-content">
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", fontStyle: "italic" }}>
        {note ? (<>({note})</>) : null}
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: "center" }}>
      {LINK_LABELS.map((label, index) => {
        const link = getLinkByLabel(label);
          return (
            <>
              {link ? (<Button size="small" key={index}><a href={link.href} target="_blank" rel="noopener noreferrer">{label}</a></Button>)
                    : (<Button className="disabled-button"><s>{label}</s></Button>)}
              {index < LINK_LABELS.length - 1 ? (
              <Box component="span" sx={{ display: { xs: "none", sm: "inline-flex" } }}>
                <PiStarFourFill size={'1em'} />
              </Box>) : null}
            </>
          );
        })}
    </CardActions>
  </Card>
  )
}

// Old card code; TODO: delete once I'm sure I don't want it anymore

// function ProjectCard({ title, description, links = [], note }: ProjectCardProps) {

//   const getLinkByLabel = (label: string) => links.find((link) => link.label === label);
//   const LINK_LABELS = ["VISIT", "ABOUT", "DOCUMENTATION"];

//   return (
//     <div>
//       <h3>
//         {title}
//         <hr />
//       </h3>

//       <p>
//         {LINK_LABELS.map((label, index) => {
//           const link = getLinkByLabel(label);
//           return (
//             <span key={index}>
//               {link ? (<a href={link.href} target="_blank" rel="noopener noreferrer">{label}</a>) : (<s>{label}</s>)}
//               {index < LINK_LABELS.length - 1 ? (<>&nbsp; <PiStarFourFill /> &nbsp;</>) : null}
//             </span>
//           );
//         })}
//       </p>

//       <p>
//         {description}
//         <br />
//         {note ? <i>({note})</i> : null}
//       </p>
//     </div>
//   );
// }

function Projects() {
  return (
    <Container>
      <h1>
        <FaRegStar /> <FaStar /> <FaRegStar />
      </h1>

      {Array.from({ length: Math.ceil(projectData.length / 2) }, (_, rowIndex) => (
        <Stack key={rowIndex} direction={{ sm: "column", md: "row" }} spacing={1} className="card-row">
          {projectData.slice(rowIndex * 2, rowIndex * 2 + 2).map((project, index) => (
            <Paper key={index} variant="outlined" elevation={20} className="project-card">
              <MuiCard title={project.title} links={project.links} description={project.description} note={project.note} />
            </Paper>
          ))}
        </Stack>
      ))}
    </Container>
  );
}

export default Projects;
