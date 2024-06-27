import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HelloWorld = () => {
    return (
        <div>
            <p>
                <h1>Hello World!</h1>
            </p>
            <p>
                <Link to={"/"} className='tlink'>
                    <Button variant="outlined" color="secondary" onClick={() => {}}>Back to Main</Button>
                </Link>
            </p>
        </div>
    )
}

export default HelloWorld;