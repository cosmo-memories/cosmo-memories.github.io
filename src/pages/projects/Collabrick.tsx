import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { FaStar, FaArrowLeft } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";

function Collabrick() {
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
                        <TbStarsFilled className="star-icon" />&nbsp; Collabrick: Full-Stack Collaboration
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b>Collabrick</b> is a <b>web app</b> for DIY enthusiasts which enables them to track their progress, manage their budgets, share their work, and collaborate with others in real time. 
                        I worked on Collabrick's development as part of a 7-person team for the software engineering course <b>SENG302</b> during the final year of studying for my <b>Bachelor of Science</b>.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Development took place over the course of a full year, and we operated under an <b>agile</b> philosophy using the well-known <b>scrum</b> framework. 
                        Collabrick itself is built primarily in <b>Java</b>, using the <b>Spring</b> framework via <b>Spring Boot</b>, and also utilizes <b>JavaScript</b>, <b>HTML</b>, and <b>CSS</b>. 
                        We also used a variety of external libraries and technologies during development, details of which may be found in the relevant sections below.
                    </Typography>
                </Paper>
                
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    <img src="/images/collabrick.png" alt="Collabrick" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Early Development
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        Collabrick began life as "<b>Home Helper</b>", and initial features were built with reference to requirements laid out by the app's "product owner" (actually the course co-ordinator). 
                        For the duration of our first sprint the team worked in two halves; one half laid the groundwork for creating and modifying "renovation" entities, 
                        while the other — the one I was part of — built the beginnings of the user account system, including the ability for users to log in to the app. 
                        We made use of the <b>Spring Security</b> framework to handle authentication, authorization, and other security concerns. 
                        At the beginning of our second sprint, we merged our codebases, and worked as a full 7-person team for the duration of development.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Over the next few sprints we not only worked on the application itself, but also our team's communication and development strategies. 
                        We experimented with both <b>story</b> and <b>task-based branching</b>, and found that individual task branching was most conducive to our workflow, as it allowed us to get new code and features into the main branch faster. 
                        We ran <b>daily scrums</b> to keep everyone up-to-date on progress and give us an opportunity to assist struggling teammates, 
                        eventually extending these meetings to include a regular review of our Gitlab <b>issue tracker</b> to make sure bugs and oversights were being addressed in a timely manner. 
                        During these sprints, we expanded the application and added a number of key features and new technologies, some of which are described below.
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    {/* <img src="/images/collabrick2.png" alt="Collabrick" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    Image coming soon!!
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Renovation Customization
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        ...
                    </Typography>
                    <Typography variant="body1" component="p">
                        ...
                    </Typography>
                </Paper>
            </Box>   

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; User Profiles
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        ...
                    </Typography>
                    <Typography variant="body1" component="p">
                        ...
                    </Typography>
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    {/* <img src="/images/collabrick3.png" alt="Collabrick" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    Image coming soon!!
                </Paper>
            </Box>     

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    {/* <img src="/images/collabrick2.png" alt="Collabrick" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    Image coming soon!!
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Tagging and Filtering
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        ...
                    </Typography>
                    <Typography variant="body1" component="p">
                        ...
                    </Typography>
                </Paper>
            </Box>         

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Building Our Vision
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        In our final sprints, we were encouraged to develop our own <b>product vision</b> and transform our "Home Helper" application into a distinct product that would stand out amongst the other teams in the course. 
                        This included a full rebranding with a name, theme, and direction that we produced as a team. While brainstorming for new names, we were attracted to the humorous simplicity of the name "Brick", 
                        and eventually converged on the concept of "building something brick by brick together", which became the foundation of our new direction, 
                        and encapsulated not only the focus of our application, but the goals of our team as participants in the course. 
                        From this idea, "<b>Collabrick</b>" was born, with the tagline "<b>renovation, collaboration, brick by brick</b>".
                    </Typography>
                    <Typography variant="body1" component="p">
                        Along with the rebranding, we also wrote our own <b>user stories</b> to describe the features we wanted to include as part of our unique product direction. 
                        More information about these features can be found below.
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    {/* <img src="/images/collabrick4.png" alt="Collabrick" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    Image coming soon!!
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Chatting for Collaboration
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        ...
                    </Typography>
                    <Typography variant="body1" component="p">
                        ...
                    </Typography>
                </Paper>
            </Box>   

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Brick AI
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        ...
                    </Typography>
                    <Typography variant="body1" component="p">
                        ...
                    </Typography>
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" }}>
                    {/* <img src="/images/collabrick5.png" alt="Collabrick" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    Image coming soon!!
                </Paper>
            </Box>     
        </Box>
    </Box>
  );
}

export default Collabrick;
