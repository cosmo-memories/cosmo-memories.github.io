import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { FaStar, FaArrowLeft } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { PiStarFourFill } from "react-icons/pi";

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
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/fullstacks.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/fullstacks2.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; About the Frontend
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        FullStacks is undergoing a <b>full frontend rework</b> while it is offline! I'll have more to share about this as it happens, and this page will be updated with pictures and information before everything goes live again.
                    </Typography>
                    <Typography variant="body1" component="p">
                        The images on this page show the original frontend; I'm much more experienced in React and JS in general than I was when I first put this together, so I'm excited to show off something a bit more impressive soon.
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; About the Backend
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        The FullStacks database is running on the free tier of <b>MongoDB Atlas</b> (for now), and communication with the application's frontend uses a <b>REST API</b> developed with <b>Node.js</b> and <b>Express.js</b>.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        This project is exciting because it's my first where I have written absolutely <i>everything</i> from scratch, including my own API specifications in compliance with <b>OpenAPI</b>'s standards. The .yml for the current API spec can be found on GitHub <u><a href="https://github.com/cosmo-memories/cosmo-memories.github.io/blob/main/src/assets/fullstacks/FSL%20OpenAPI%20Spec.yml">here</a></u> — view using <b>Swagger</b> or a similar editor. I will have a native setup to view this in due time, but my current focus is on the app itself!
                    </Typography>
                    <Typography variant="body1" component="p">
                        The FullStacks API uses <b>Mongoose</b> to enforce a schema on MongoDB. Below is a breakdown of that schema detailing the decision making behind each field. Everything about the project, including these specifications, is evolving as I learn more about the process, so please bear with me as things change over time.
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Mongoose Schema
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Title — </b>
                        A <b>string</b> containing the title of the book. 
                        This is a <b>required</b> property, and excludes the series' title unless it is also part of the book's proper title. 
                        For example, <i>Percy Jackson and the Lightning Thief</i> would be recorded as such, 
                        however <i>Wings of Fire: The Brightest Night</i> would be recorded as simply <i>The Brightest Night</i>.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Author — </b>
                        Books can have multiple authors, and their names may be presented in different orders depending on the context; 
                        for example, libraries are generally indexed based on the author's surname, but readers may discuss authors using their first name. 
                        For flexibility, this property is an <b>array</b> containing objects of the form: &nbsp;
                        <code>{`{ firstName: String, lastName: String }`}</code>.
                        This allows for the inclusion of multiple authors, as well as accessing their first and last names seperately as necessary. 
                        A book is <b>required</b> to have at least one author.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Category — </b>
                        A <b>required string</b> which may be any of the following possible options: <i>Fiction</i> (for adult and young adult fiction novels), <i>Childrens</i> (for children's fiction novels), <i>Nonfiction</i> (for nonfiction books, artbooks, reference texts, etc), 
                        or <i>Graphic Novel</i> (for comics, manga, etc). 
                        Initially, this property was designed as a string to enable the adding of further categories if needed, but I plan to redesign it as an <b>enum</b> in the near future.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Genres — </b>
                        An <b>array</b> which is <b>required</b> to contain one or more <b>string</b> values describing the genre of the book. Ideally, 
                        these conform to a small list of commonly accepted genre titles (<i>Fantasy</i>, <i>Sci-Fi</i>, <i>Horror</i> etc.), 
                        but may be as specific as necessary, so I chose not to enforce these as an enum for now.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Language — </b>
                        A <b>required string</b> describing the primary language of the book. 
                        In the case of this project, this will likely be one of the following: <i>English</i>, <i>French</i>, or <i>Japanese</i>. 
                        As above, this was designed as a string in order to be able to add varying languages as necessary, but will probably be reworked into an <b>enum</b> in the near future.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Series — </b>
                        The name of the series to which the book belongs, recorded as a <b>string</b>. 
                        An <b>optional</b> property, this should not be included if the book is a standalone work.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Volume — </b>
                        A <b>number</b> which should be provided <b>if and only if</b> the <i>Series</i> property is also present. 
                        This describes which position the book is in its series. Note that this may be a zero or non-integer in some cases, 
                        depending on the particular details of the series.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Notes — </b>
                        An <b>optional string</b> containing any relevant additional information about the book.
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                        <b><PiStarFourFill className="star-icon" />&nbsp; Cover — </b>
                        An <b>optional string</b> containing a filepath to the book's cover image; the ability to upload images is still a work in progress and not yet detailed in the API spec.
                    </Typography>
                    <Typography variant="body1" component="p">
                        <b><PiStarFourFill className="star-icon" />&nbsp; createdAt/updatedAt — </b>
                        These fields are <b>dates</b> and are managed automatically by MongoDB whenever resources are created or updated, as their names imply.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    </Box>
  );
}

export default FullStacks;
