import { Box, Paper, Typography, Button, Grid } from "@mui/material";
import { ProjectLink, ProjectCardProps } from "../types/Projects";

import { FaStar } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

const projectData: ProjectCardProps[] = [
  {
    title: "Collabrick (formerly Home Helper)",
    description:
      "A communication and budget tracking app for DIY enthusiasts, featuring real-time chat rooms and a friendly LLM chatbot to help users manage their time and money. A full-stack application built in Java Spring, Collabrick was developed under the scrum framework over the course of a year as part of a 7-person agile team during my BSc study.",
    note: "Links, documentation, and details coming by the end of next week!",
  },
  {
    title: "FullStacks: A Book Journal",
    description:
      "A full-stack MERN project for playing with NoSQL databases and API design, in the form of a personal reading log where I record and track my reading habits. Check out the documentation for a full overview of API and database design decisions, and lots of chatter about the development process.",
    note: "FullStacks is currently offline until I sort out new hosting for the API. Hopefully this will happen before the end of October. Sorry!",
  },
  {
    title: "Daguerreo: Mathematics Notes & Reference",
    links: [
      { label: "VISIT", href: "https://cosmo-memories.github.io/math/" },
      { label: "ABOUT", href: "https://cosmo-memories.github.io/math/about.html" },
    ],
    description:
      "A small archive of math notes on a variety of topics from my time at university. Daguerreo is a static HTML site built with Jekyll and hosted on Github Pages, and should be considered a low-priority, perpetual work in pogress; I am summarizing and uploading things as I have the time.",
  },
  {
    title: "Coming Soon: Memoria Blog 2.0",
    description:
      "Coming very soon, a full-stack personal blog platform to replace my old Jekyll blog! There will be posts about my dev journey, and maybe video games and other stuff. Memoria 2.0 is planned to be fully handmade with a React frontend, REST API using Node.js and Express, and a relational database for post storage.",
    note: "Expect a prototype by the end of 2025!"
  },
];

const linkLabels = ["VISIT", "ABOUT", "DOCUMENTATION"] as const;

function Projects() {
  return (
    <Box className="main-container" sx={{ px: 0 }}>
      <Box className="text-wrapper fade-in">
        <Grid container spacing={4}>
          {projectData.map(({ title, description, note, links = [] }, index) => {
            const linkMap: Record<string, string> = {};
            links.map(({ label, href }: ProjectLink) => {
              linkMap[label.toUpperCase()] = href;
            });

            return (
              <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
                <Paper sx={{ p: 3, borderRadius: 3, flexGrow: 1, display: "flex", flexDirection: "column", minHeight: 350 }}
                       className="bounce" elevation={2} >
                  <Box sx={{ width: "100%", height: 150, backgroundColor: "#000000ff", borderRadius: 2, mb: 2, 
                             display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontStyle: "italic", flexShrink: 0 }}>
                    Image coming soon!
                  </Box>

                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <FaStar className="star-icon" />
                      {title}
                    </Box>
                  </Typography>

                  <Typography variant="body2" mb={1} sx={{ flexGrow: 1 }}>
                    {description}
                  </Typography>

                  {note && (
                    <Typography variant="caption" display="block" mb={1} color="text.secondary">
                      {note}
                    </Typography>
                  )}

                  <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center" }}>
                    {linkLabels.map((label, idx) => {
                      const href = linkMap[label];
                      const disabled = !href;

                      return (
                        <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
                          {idx > 0 && (
                            <Box sx={{ mx: 1 }}>
                              <PiStarFourFill size="0.9em" className="star-icon" />
                            </Box>
                          )}
                          <Button variant="text" size="small" href={href} target={disabled ? undefined : "_blank"}
                                  rel={disabled ? undefined : "noopener noreferrer"} disabled={disabled}
                                  sx={{ textDecoration: disabled ? "line-through" : "none", pointerEvents: disabled ? "none" : "auto",
                                        color: disabled ? "rgba(0, 0, 0, 0.38)" : undefined, 
                                        borderColor: disabled ? "rgba(0, 0, 0, 0.12)" : undefined, minWidth: "auto" }}>
                            {label}
                          </Button>
                        </Box>
                      );
                    })}
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
