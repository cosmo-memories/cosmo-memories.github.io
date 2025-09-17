import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Paper, Stack, Typography } from "@mui/material";
import { ProjectCardProps } from "../types/Projects";
import '../styles/Projects.css';

import { FaRegStar, FaStar } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

const projectData = [
  {
    title: "Daguerreo Mathematics",
    links: [
      { label: "VISIT", href: "https://cosmo-memories.github.io/math/" },
      { label: "ABOUT", href: "https://cosmo-memories.github.io/math/about.html" }
    ],
    description: "Small archive of mathematics notes and reference material from my university study. Static site built with Jekyll.",
    note: "Very much a work in progress.",
  },
  {
    title: "Home Helper",
    description: "A group project I worked on during the third year of my BSc; a communication and budget tracking app for DIY enthusiasts.",
    note: "Details coming very soon!",
  },
  {
    title: "FullStacks: A Book Journal",
    description: "A full-stack MERN project where I track and comment on all the books I read!",
    note: "Mostly functional!! Just needs some cleanup before hosting!",
  },
  {
    title: "XIVFishing API",
    description: "A relational databse tracking fish and fishing skill information for the critically acclaimed MMO Final Fantasy XIV, with a Node.js API to enable access.",
  },
  {
    title: "Memoria Blog",
    description: "A full-stack personal blog platform with posts stored in a relational database. There will be posts about video games, books, and sometimes dev stuff.",
  },
  {
    title: "Coming Soon",
    description: "This project is coming soon!",
  }
];

function MuiCard({ title, description, links = [], note}: ProjectCardProps) {

  const getLinkByLabel = (label: string) => links.find((link) => link.label === label);
  const LINK_LABELS = ["VISIT", "ABOUT", "DOCUMENTATION"];

  return(
  <Card sx ={{ width: { xs: "100%" }, height: { xs: 200 } }} className="single-card">
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
