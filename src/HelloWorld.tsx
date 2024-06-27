import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HelloWorld = () => {
    return (
        <div>
            <p className='box-head'>
                <h1>cosmo-memories.github.io</h1>
            </p>
            <div className='box'>
                <h1>Hello World!</h1>
                <p>
                    Hello world! Here is some text.
                </p>
                <p className='text-block'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    And here is a button:
                </p>
                <p>
                    <Link to={"/"} className='tlink'>
                        <Button variant="contained" onClick={() => {}}>Back to Main</Button>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default HelloWorld;