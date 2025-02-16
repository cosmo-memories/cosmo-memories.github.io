import { Container, Paper, Stack } from "@mui/material";
import { FaRegStar, FaStar } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
// import { Link } from "react-router-dom";
// <Paper square variant="outlined" style={{padding: "10px", textAlign: "left", minHeight: "100vh"}}>
// <Box style={{margin: "0", width: "100vw"}} sx={{ px: 0 }}>

function FullStacks() {
  return (
    <div>
      <h3>
        FullStacks: A Book Journal
        <hr />
      </h3>
      <p>
        <i>Coming soon!!</i>
        {/* <Link to={"/"}>VISIT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>ABOUT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>DOCUMENTATION</Link>  */}
      </p>
      <p>
        A full-stack MERN project where I track and comment on all the books I read!
        <br />
        <i>( Mostly functional!! Just needs some cleanup before hosting! )</i>
      </p>
    </div>
  )
}

function FishAPI() {
  return (
    <div>
      <h3>
        XIVFishing API
        <hr />
      </h3>
      <p>
        <i>Coming soon!!</i>
        {/* <Link to={"/"}>VISIT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>ABOUT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>DOCUMENTATION</Link>  */}
      </p>
      <p>
        A relational databse tracking fish and fishing skill information for the critically acclaimed MMO Final Fantasy XIV, with a Node.js API to enable access.
      </p>
    </div>
  )
}

function Memoria() {
  return (
    <div>
      <h3>
        Memoria Blog
        <hr />
      </h3>
      <p>
        <i>Coming soon!!</i>
        {/* <Link to={"/"}>VISIT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>ABOUT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>DOCUMENTATION</Link>  */}
      </p>
      <p>
        A full-stack personal blog platform with posts stored in a relational database. There will be posts about video games, books, and sometimes dev stuff.
      </p>
    </div>
  )
}

function Daguerreo() {
  return (
    <div>
      <h3>
        Daguerreo Mathematics
        <hr />
      </h3>
      <p>
        <a href="https://cosmo-memories.github.io/math/">VISIT</a> &nbsp; <PiStarFourFill /> &nbsp; 
        <a href="https://cosmo-memories.github.io/math/about.html">ABOUT</a> &nbsp; <PiStarFourFill /> &nbsp; 
        <s>DOCUMENTATION</s> 
      </p>
      <p>
        Small archive of mathematics notes and reference material from my university study. Static site built with Jekyll.
        <br />
        <i>( Very much a work in progress. )</i>
      </p>
    </div>
  )
}

function Placeholder() {
  return (
    <div>
      <h3>
        Coming Soon
        <hr />
      </h3>
      <p>
        <i>Coming soon!!</i>
        {/* <Link to={"/"}>VISIT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>ABOUT</Link> &nbsp; <PiStarFourFill /> &nbsp; 
        <Link to={"/"}>DOCUMENTATION</Link>  */}
      </p>
      <p>
        This project is coming soon!
      </p>
    </div>
  )
}

function Projects() {
  return (
    <Container>
      <h1>
        <FaRegStar /> <FaStar /> <FaRegStar />
      </h1>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} style={{marginBottom: "1%"}} sx={{justifyContent: "center", alignItems: "stretch"}}>
        <Paper square variant="outlined" elevation={20} style={{padding: "30px", flexGrow: "1", flexBasis: "0"}}>
          {Daguerreo()}
        </Paper>
        <Paper square variant="outlined" elevation={20} style={ {padding: "30px", flexGrow: "1", flexBasis: "0"}}>
          {FullStacks()}
        </Paper>
        <Paper square variant="outlined" elevation={20} style={{padding: "30px", flexGrow: "1", flexBasis: "0"}}>
          {FishAPI()}
        </Paper>
      </Stack>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} style={{marginTop: "1%"}} sx={{justifyContent: "center", alignItems: "stretch"}}>
        <Paper square variant="outlined" elevation={20} style={{padding: "30px", flexGrow: "1", flexBasis: "0"}}>
          {Memoria()}
        </Paper>
        <Paper square variant="outlined" elevation={20} style={{padding: "30px", flexGrow: "1", flexBasis: "0"}}>
          {Placeholder()}
        </Paper>
        <Paper square variant="outlined" elevation={20} style={{padding: "30px", flexGrow: "1", flexBasis: "0"}}>
          {Placeholder()}
        </Paper>
      </Stack>
    </Container>
  )
}

export default Projects;