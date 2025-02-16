import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const Nav = () => {
    return(
        <Container>
            <AppBar position="fixed">
                <Container maxWidth={false}>
                    <Toolbar sx={{ mx: { md: "2vw" } }}>
                        <AutoAwesomeIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 2 }} />
                        <Typography variant="h6" noWrap
                            sx={{mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace',
                            fontWeight: 700, letterSpacing: '.3rem', textDecoration: 'none'}}>
                                 COSMO MEMORIES
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }} >
                            
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Link to={"/"}><Button size="medium" color="inherit">
                                HOME
                            </Button></Link>
                            <Link to={"/about"}><Button size="medium" color="inherit">
                                ABOUT
                            </Button></Link>
                            <Link to={"/projects"}><Button size="medium" color="inherit">
                                PROJECTS
                            </Button></Link>
                            <Link to={"/contact"}><Button size="medium" color="inherit">
                                CONTACT
                            </Button></Link>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </Container>
    )
}

export default Nav;