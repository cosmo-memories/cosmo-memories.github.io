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
                        While we shared collective responsibility for all aspects of the project, I focused on the backend design of the base classes and their interactions, while my teammate spearheaded the frontend GUI development (which is built using <b>Java Swing</b>). 
                        The source code can be viewed on GitHub <u><a href="https://github.com/cosmo-memories/seng-soccer-sim">here</a></u>, and you can read some details about the development process below.
                    </Typography>
                </Paper>
                
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/soccersim.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/soccersim4.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/soccersim3.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/soccersim5.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Game Flow
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        Gameplay consists of a simple loop with each stage represening one week of the season, the length of which can be customized by the player during setup. 
                        Each week, the player may hire new team members, manage their active roster, and buy or use items from the store. When they are ready, they may play a match against a randomly-generated opposing team. 
                        Matches are resolved automatically, and consist of a series of dice rolls and stat comparisons between athletes on each team in order to determine a winner. 
                        Losses cause the player's athletes to take HP damage, and athletes that become too damaged will be unable to participate in matches; HP and other stats may be adjusted by using items. 
                        Wins earn the player points, as well as money with which to buy more athletes or items, with the goal of the game being to reach the end of the season with the highest points possible.
                    </Typography>
                    <Typography variant="body1" component="p">
                        Below is an outline of the key classes and a description of how they contribute to the gameplay loop.
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3}
                    sx={{ flex: 1, p: 0, borderRadius: 3, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", 
                          backgroundColor: "#000000ff", border: "2px solid #6366f1", "&:hover": { borderColor: "#6390f1" } }}>
                    <img src="/images/soccersim-uml.png" alt="FullStacks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Paper>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, mb: 4 }}>
                <Paper className="bounce" elevation={3} sx={{ flex: 2, p: 4, borderRadius: 3 }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        <FaStar className="star-icon" />&nbsp; Class Design
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        The <b>UML diagram</b> above depicts the initial core design of the game, 
                        defining the main classes and how they interact with each other. 
                        Note that this diagram was produced early in development 
                        and many of the listed variables and methods do not exactly match the actual implementations, 
                        however, the class relationships depicted are still accurate.
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        The main game state is managed by the <b>Environment</b> and <b>GameSetup</b> classes, 
                        which keep track of all the necessary variables and objects such as the season length, current week, 
                        and the player's athletes (via a <b>PlayerTeam</b> object), items, money, and points. 
                        The Environment class also handles moving the player between the different areas of the game, 
                        the <b>Shop</b>, <b>Club</b>, and <b>Stadium.</b>
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        At the <b>Shop</b>, the player may spend accrued money to hire new <b>Athletes</b> or buy <b>Items</b>. 
                        Items and Athletes are both implementations of the <b>Purchasable</b> interface, which declares the &nbsp;
                        <b><code>buy()</code></b> method and relevant constants. 
                        Items are an abstract class, with each specific item type extending the main Item class and implementing their own &nbsp;
                        <b><code>use()</code></b> methods. Athletes are arguably the most important class in the game, 
                        and are generated as one of three types: <b>Attackers</b>, <b>Defenders</b>, and <b>All-Rounders</b>. 
                        Athletes are created with randomly-generated stats (Attack, Defense, and HP), 
                        and each type of Athlete gains a bonus to specific stats on creation. 
                        Athletes are also randomly generated a name by selecting a random forename and surname from a list of options. 
                        Athlete objects may also be designated as a "dummy" using the &nbsp;
                        <b><code>setDummy()</code></b> method; this sets all of their statistics to 0 and their boolean &nbsp;
                        <b><code>dummy</code></b> value to &nbsp;<b><code>true</code></b>. "Dummy" Athletes represent an empty slot in the player's roster, 
                        and are introduced if, for example, an Athlete leaves the team or is removed by the player. 
                        Players are prevented from playing a match if there are any Dummies on their team, which the game checks by calling the &nbsp;
                        <b><code>isDummy()</code></b> method.
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        The player is able to manage their Athlete roster and use any purchased items by visiting the <b>Club</b>.
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        When ready, the player can proceed to the <b>Stadium</b> to play that week's match. If the player does not wish to play a match that week, 
                        they may choose to take a bye. A bye will forfeit their opportunity to earn points for that week, however, it has other benefits:
                        the player may choose an Athlete to undergo &nbsp;
                        <b><code>specialTraining()</code></b> and receive a bonus to their stats. A Bye also has the chance of generating a <b>RandomEvent</b>, 
                        an abstract class with several extensions that impement different &nbsp;
                        <b><code>activate()</code></b> methods. Random events can provide stat boosts to Athletes, 
                        result in a new Athlete joining the team, or even cause an existing injured Athlete to leave the team.
                    </Typography>
                    <Typography variant="body1" component="p" mb={2}>
                        If the player chooses to participate in a <b>Match</b>, they are given a selection of several randomly-generated <b>OpposingTeams</b> to play against. 
                        Matches are resolved by compaing the player's Athlete's &nbsp;
                        <b><code>attack</code></b> and &nbsp;<b><code>defense</code></b> values wih those of the opposing Athletes. 
                        Comparisons are made between Athletes in the same numbered slots on each team, 
                        and the stats compared are also determined by the slot number; Athletes in the first or second slots use their &nbsp;
                        <b><code>attack</code></b> stats, while Athletes in the third or fourth slots use their &nbsp;
                        <b><code>defense</code></b> stat, and Athletes in the final slot use both. 
                        (This design is part of an incomplete system wherein the slot numbers represent different field positions: 
                        slots 1-2 are offensive, 3-4 are defensive, and the final slot represent the goalie. 
                        Sadly, there was not enough time to flesh out these elements before the project deadline, 
                        so this aspect of team setup is not fully apparent to the player.) 
                        The results of each comparison are delivered to the player in the form of text strings indicating which Athletes were successful. 
                        If the player has higher stats in the majority of comparisons, they win the match! They then receive points as well as a cash prize 
                        which they can use at the Shop to further improve their team. 
                        If the player loses the match, their Athletes suffer a penalty to their current HP, and will need to be healed using items or by taking a bye the following week.
                    </Typography>
                    <Typography variant="body1" component="p">
                        After the conclusion of a match (or after taking a bye), the game proceeds to the next week, and the week counter on the menu advances by 1. 
                        Once the player has completed their final week (as determined by the number they chose during setup), they are presented with their final score, and the game ends.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    </Box>
  );
}

export default SoccerSim;
