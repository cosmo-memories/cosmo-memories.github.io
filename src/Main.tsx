import { Link } from "react-router-dom";
import './Main.css';
import { Button } from "@mui/material";

const Main = () => {
    return (
        <div>
            <p className='box-head'>
                <h1 className= 'header-text'>cosmo memories</h1>
            </p>
            <div className='box'>
                <p>
                    <Link to={"/helloworld"} className='tlink'>
                        <Button variant="contained" onClick={() => {}}>Hello World</Button>
                    </Link>
                    &nbsp;
                    <a href='https://cosmo-memories.github.io/blog'>
                        <Button variant="contained" onClick={() => {}}>Blog</Button>
                    </a>
                    &nbsp;<a href='https://cosmo-memories.github.io/math'>
                        <Button variant="contained" onClick={() => {}}>Math</Button>
                    </a>
                    &nbsp;
                    <a href='https://github.com/cosmo-memories/'>
                        <Button variant="contained" onClick={() => {}}>Github</Button>
                    </a>
                </p>
                <p className='text-block'>
                    This is a placeholder page.
                </p>
                <p className='text-block'>
                    I don't know what I'm doing. Send help.
                </p>
            </div>
        </div>
    )
}

export default Main;