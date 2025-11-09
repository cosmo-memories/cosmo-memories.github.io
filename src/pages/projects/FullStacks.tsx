import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaStar, FaArrowLeft } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";

function FullStacks() {
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
                        <TbStarsFilled className="star-icon" />&nbsp; FullStacks: About the Book Journal
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b>FullStacks: A Book Journal</b> is an up-and-coming project I've been working on in order to gain eperience with NoSQL databases.
                        As the name implies, this is a full-stack project, and uses the popular <b>MERN</b> (MongoDB, Express, React, Node) stack.
                        I love reading, especially sci-fi/fantasy fiction (see my About page!), and this project tracks information about every book I finish, 
                        with the end goal of building the FullStacks database into a complete catalogue of my personal home library — I love organizing books just as much as reading them.
                    </Typography>
                    <Typography variant="body1" component="p">
                        FullStacks is <b>currently offline</b>; it will be back as soon as I can sort out new hosting for the API. When it returns, it will also be with a brand-new frontend design, so stay tuned. 
                        Since I've decided to take this opportunity for a full rework, getting things back up will take a little longer than originally planned.
                    </Typography>
                </Paper>
                
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    Image coming soon!
                    {/* <img src="/images/about-me.jpg" alt="About Image" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; About the Frontend
                    </Typography>
                    <Typography variant="body1" component="p">
                        Details coming soon!
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; About the Backend
                    </Typography>
                    <Typography variant="body1" component="p">
                        Details coming soon!
                    </Typography>
                </Paper>
            </Box>
        </Box>
    </Box>
  );
}

export default FullStacks;
