import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { FaStar, FaArrowLeft } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";

function SoccerSim() {
  return (
    <Box className="main-container" sx={{ px: 0 }}>
        <Box className="text-wrapper fade-in">
            <Box>
                <Typography variant="h6" fontWeight="bold" mb={2}> 
                    <Link to="/projects"><FaArrowLeft className="star-icon" /></Link>&nbsp; Back to Projects
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h4" fontWeight="bold" mb={2}>
                        <TbStarsFilled className="star-icon" />&nbsp; SENG Soccer Sim: My First Software
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b>SENG Soccer Sim</b> is a <b>Java</b> project I worked on while studying for my computer science degree, as part of the second-year software engineering course SENG201. Soccer Sim is a small, simple sports management game where the player recruits a team of athletes, manages their various statistics, and helps them confront other teams through a season of matches to (hopefully) emerge victorious.
                    </Typography>
                    <Typography variant="body1" component="p">
                        This project was developed as part of a two-person team, and was not only my first time working in a team environment, but also my first time working on a complete piece of software from beginning to end! 
                        While we shared collective responsibility for all aspects of the project, I focused on the backend design of the base classes and their interactions, while my teammate spearheaded the frontend UI development. 
                        The source code can be viewed on GitHub <u><a href="https://github.com/cosmo-memories/seng-soccer-sim">here</a></u>, and you can read some details about the development process below.
                    </Typography>
                </Paper>
                
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    <img src="/images/soccersim.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    <img src="/images/soccersim4.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    <img src="/images/soccersim3.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    <img src="/images/soccersim5.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Class Design
                    </Typography>
                    <Typography variant="body1" component="p">
                        The <b>UML diagram</b> below depicts the core design of the game, defining the main classes and how they interact with each other. 
                        Expect a more detailed writeup here in the near future!
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    <img src="/images/soccersim-uml.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Game Flow
                    </Typography>
                    <Typography variant="body1" component="p">
                        A detailed description of the gameplay and season progression will be here soon! Please look forward to it.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    </Box>
  );
}

export default SoccerSim;
