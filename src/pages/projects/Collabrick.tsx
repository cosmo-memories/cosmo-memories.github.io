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
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
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
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff",border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/collabrick2.png" alt="Collabrick Renovation Overview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Renovation Customization
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        The centerpiece of Collabrick's functionality is the ability for users to create and modify <b>Renovation profiles</b>. 
                        Each "renovation" represents a DIY project that the user is currently undertaking (or plans to). 
                        Initially, we allowed users to add basic information about their renovation such as its name, a short description, and a list of rooms related to the project. 
                        Further development saw us add searchable tags, lists of tasks and related budget items, and the ability to add other users as members of the project, giving them specific editing privileges. 
                        We also fully <b>reengineered</b> the main renovation page mid-development in order to adopt more sleek and functional design.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Leveraging <b>Spring Boot</b> and the <b>Hibernate</b> framework to help manage our database interactions, we designed <b>relational database</b> tables for renovations and their associated entities, such as tasks, rooms, and tags. 
                        During development and local testings, we used an in-memory <b>H2</b> database, migrating to to persistent instances of <b>MariaDB</b> for our staging and production environments.
                    </Typography>
                    <Typography variant="caption" component="p" color="text.secondary">
                        I will upload some entity relationship diagrams and more information about our database design and reengineering in the near future!
                    </Typography>
                </Paper>
            </Box>   

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; User Profiles
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Users on Collabrick are required to verify their email address before they can use the application, 
                        and can also invite their friends via email to join in as participants of their renovations, even if those friends do not have their own account yet.
                        We used the <b>Spring Mail</b> library to manage these and any other email-related tasks, such as resetting a forgotten password.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Adding features to user profiles was one of our first major tests when it came to researching solutions to more complex tasks which would require implementing <b>external dependencies</b> on the project. 
                        Users are allowed to upload a .jpeg, .png, or .svg image for their profile picture; we opted to use <b>Apache Tika</b> for image type detection to help prevent users from uploading unauthorized file types. 
                        We also allowed users to add a street address to their profile, and used <b>Mapbox</b>'s address API to provide autocomplete functionality on the address form. 
                        Before adding each dependency, we performed a <b>spike</b> to experiment with our options and choose the best tool for the job, then presented our findings to the product owner for final approval to add the new dependency to the project.
                    </Typography>
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff",border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/collabrick3.png" alt="Collabrick User Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>     

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff",border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/collabrick4.png" alt="Collabrick Tag System" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Tagging and Filtering
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        When adding the ability for users to tag their renovations with searchable hashtags, the product owner required that we impose <b>profanity filtering</b> on user inputs. 
                        Up to five tags can be added per renovation, and we also added an autocomplete dropdown that provides suggestions based on previously entered tags. 
                        The tag feature proved deceptively difficult to implement, as it was the first time we were faced with having to update a number of elements of the page in real time; 
                        as well as needing the autocomplete to update with each letter entered, we wanted tags to be added to the list after submission without fully reloading the page each time.
                    </Typography>
                    <Typography variant="body1" component="p">
                        To address the filtering requirements, we decided on a dual-layered approach. 
                        We maintained a local list of disallowed words that each tag was checked against, 
                        before also making a call to <b>ProfanityAPI</b> for more advanced detection. 
                        This allowed us to leverage a specialized tool with more powerful capabilities without sacrificing all control of the filtering process.
                    </Typography>
                </Paper>
            </Box>      

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Responsive Design and Testing
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Every part of Collabrick is designed with both mobile and desktop devices in mind. 
                        We built the app's frontend with <b>Bootstrap</b>, which allowed us to easily create flexible components that scaled well across different screens. 
                        As part of our manual testing process, we tested each page and feature across a number of screen and window sizes, 
                        ensuring all page elements were clear and functional.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Some UI elements change entirely at smaller screen sizes in order to maintain functionality; for example, the navigation bar uses <b>media queries</b> to collapse itself into a "hamburger" menu on mobile devices, with 
                        larger text and buttons that are easy to press on touch screens.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Over the course of development, we also built a large suite of automated tests using various different tools. 
                        We employed <b>JUnit</b> for unit testing, <b>Cucumber</b> for acceptance testing, and <b>Playwright</b> for end-to-end testing. 
                        As part of our PR review checklist, we required all new code to have thorough tests written before merges would be approved, which made sure we were all held to account for the functionality of our code and (most) issues could be caught before they made it into the main branch. 
                    </Typography>
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff",border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/collabrick5.png" alt="Collabrick Mobile Design" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff",border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/collabrick6.png" alt="Collabrick Budget Graphs" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Budgeting Tools
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        To help users engage with the application's <b>budget tracking</b> features, the team wanted a fun visual way to convey the spending information for each renovation. 
                        Renovation owners are able to provide a maximum budget for a number of spending categories, and all members of the renovation team can track their actual spending in each category by adding expenses to their renovation tasks; this information is then reflected in two pie charts on the budgeting page. 
                        Categories where the renovation's spending exceeds the owner's stated budget are marked in red, and a warning is given on mouseover.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        We employed the <b>Chart.js</b> JavaScript library to display our charts, chosen for its simplicity in both design and implementation.
                    </Typography>
                    <Typography variant="caption" component="p" color="text.secondary">
                        More details about the renovation task system and related design decisions will be added here soon!
                    </Typography>
                </Paper>
            </Box>   

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Chatting for Collaboration
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Central to our new vision of Collabrick was the addition of <b>real-time chat rooms</b>. 
                        After a <b>spike</b> to experiement with different communication tools, we settled on using <b>STOMP.js</b> to handle <b>WebSocket</b> connections. 
                        The complexity of building this feature was one of the most challenging parts of development, but was eventually successful thanks to our combined knowledge and persistence. 
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Each renovation has a <b>general chat</b> channel which all that renovation's members can take part in. 
                        The renovation's owner may then add further channels and selectively invite members as they wish, allowing renovation teams to compartmentalize their discussions. 
                        Each user on the renovation also has access to a private chat between themselves and "<b>Brick AI</b>"; see below for more information.
                    </Typography>
                    <Typography variant="body1" component="p">
                        The visual design of chats was modeled after existing popular applications like Slack and Discord, and we also borrowed the familiar method of typing "@" followed by a member's name in order to send them a direct <b>notification</b> of the message. 
                        Notifications may be viewed by clicking the bell icon in the navigation bar.
                    </Typography>
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/collabrick7.png" alt="Collabrick Chat Page" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>  

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/collabrick8.png" alt="Collabrick AI Chat" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Brick AI
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        Affectionately named "<b>Brick</b>", Collabrick's <b>AI assistant</b> is available to interact with in all chat channels. 
                        Users can ask Brick a question simply by including "@BrickAI" in their message, and Brick will give an appropriate reply based on the context of the renovation details and the messages in the current chat channel. 
                        Brick's functionality is integrated into the application using the <b>Spring AI</b> extension for Spring, and it leverages the <b>Google Gemini 2.0 Flash-lite</b> model via the Gemini API in order to generate responses; despite its limitations, this model was chosen as we were restricted to free APIs only in accordance with the course requirements. 
                        To address privacy concerns, users may opt out of having their messages read and remembered by the AI.
                    </Typography>
                    <Typography variant="body1" component="p">
                        As mentioned above, each member of a given renovation also has a private chat channel where they may converse with Brick without having to tag it in each message. 
                        Here, they may also ask Brick to <b>automatically create tasks</b> for the renovation by providing it with basic information such as a description and due date. 
                        Brick's <b>system prompt</b> instructs it how to properly format task information in order for it to be accepted by the application.
                    </Typography>
                </Paper>
            </Box>     
        </Box>
    </Box>
  );
}

export default Collabrick;
