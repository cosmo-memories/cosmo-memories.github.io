import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { FaStar, FaArrowLeft } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";

function Balamb() {
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
                        <TbStarsFilled className="star-icon" />&nbsp; Balamb: A Full-Stack Library
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b>Balamb</b> is my latest and most active current project, and is a full-stack library catalogue web app using the same stack as <b>Collabrick</b>: <b>Spring Boot</b>, <b>Bootstrap</b>, and <b>Thymeleaf</b>. 
                        Balamb serves as a replacement for my previous <b>FullStacks</b> project, as I decided to switch to using tools that I find a lot more fun and robust to build with. 
                        The initial prototype of Balamb uses a <b>H2</b> database, but will be migrated to <b>PostgreSQL</b> before deployment.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Balamb allows a user to catalogue and track a variety of essential information about their books, and I am actively working to add more ways for the user to sort, filter, and show off their collections. 
                        Below you can find the beginnings of a development diary where I discuss new features as I work on them; this will be moved to my new blog when it is up and running in the future.
                    </Typography>
                </Paper> 
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                            backgroundColor: "#000000ff",border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    {/* <img src="/images/_" alt="_" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                    Image coming soon!
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; 19/1/2026: The Story So Far
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Every time I try to get this page started up, I find something else much more urgent to do, but here were are at last. 
                        I have been working steadily on Balamb for the last month or so, and the core functionality is beginning to fall into place. 
                        I am planning to spend the current week adding to this page and cleaning up various bugs, TODOs, and testing gaps in the application, 
                        leading up to (hopefully) <b>deployment of the first version by the end of next week</b>. This will be my first time deploying a 
                        full-stack project single-handledly with no teachers or teammates to support me, and I am not ashamed to admit I am more than a bit nervous.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Another thing I need to do this week is migrate from <b>H2</b> to <b>PostgreSQL</b>. I began work with H2 because it was quick and familiar, 
                        but it has caused a lot of annoyances and is simply not going to be robust enough for a full release. I've chosen PostgreSQL due to its popularity and my unfamiliarity with it. 
                        I'm always excited to get hands-on with something new.
                    </Typography>
                    <Typography variant="body1" component="p">
                        So far, Balamb has most of its basic features in place, albeit with sparse or nonexistent testing in many areas. I will be shoring this up in the coming week as well! 
                        Right now, catalogue admins have the power to add new book records, give them a cover image, update their basic details, and mark them as "read" or "unread". Basic book details include 
                        title, author(s), publisher, ISBN, genre, and more; further options are planned as the application grows. At the bottom of this page I will add a small roundup of the app's current issues and planned updates!! 
                        The app itself also has a page dedicated to posting updates and issues; these are stored in the database and can be marked as completed/addressed by the admin so that readers can easily see how work is progressing.
                    </Typography>
                </Paper>
            </Box>  

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; 20/1/2026: Database Migration Successful
                    </Typography>
                    <Typography variant="body1" component="p">
                        Balamb is now using <b>PostgreSQL</b>! I'm pretty excited about this despite it being a relatively simple step to take, 
                        as I began just an hour or two ago with absolutely no idea what I was doing and now have a working production-ready database!! 
                        This migration also revealed some obvious bugs in the frontend related to attempting to display books when there are none in the database. 
                        I have addressed these issues by adding proper null checks and will be working over the next few days to properly fill out the app's test suite.
                    </Typography>
                </Paper>
            </Box>  

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; TODOs
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <ul className="bullet-list">
                            <li>Fill gaps in unit/integration test suite.</li>
                            <li>Add support for other media types, eg. games or movies.</li>
                            <li>Improve frontend experience and visual design.</li>
                            <li>Expand search filters to include searching by a specific string, filtering read/unread books, and more.</li>
                            <li><s>Migrate to a better RDBMS (ie. PostgreSQL).</s></li>
                        </ul>
                    </Typography>
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Known Issues
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <ul className="bullet-list">
                            <li>There is currently no confirmation prompt when deleting a book.</li>
                            <li>No feedback is given to users after successfully adding a book.</li>
                            <li>Server-side validation for books does not always return appropriate error messages.</li>
                            <li>Some admin endpoints are not RESTful.</li>
                            <li>Some backend exception handling is sloppy and inconsistent.</li>
                        </ul>
                    </Typography>
                </Paper>
            </Box>   
        </Box>
    </Box>
  );
}

export default Balamb;
