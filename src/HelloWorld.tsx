import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HelloWorld = () => {
    return (
        <div>
            <div className='content'>
                <h1>Hello World!</h1>
                <p>
                    Hello world! This is my testing ground where I unravel the magic of webdev.
                </p>
                <p>
                    Here is some text:
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    And here are some buttons:
                </p>
                <p>
                    <Link to={"/"}>
                        <Button variant="contained" onClick={() => {}}>Back to Main</Button>
                    </Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link to={"/ttt"}>
                        <Button variant="contained" onClick={() => {}}>Play Tic Tac Toe</Button>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default HelloWorld;