import { Link } from "react-router-dom";
import './Main.css';
import { Button } from "@mui/material";

const Main = () => {
    return (
        <div>
            <p>
                <h1>!! Placeholder !!</h1>
            </p>
            <p>
                <Link to={"/helloworld"} className='tlink'>
                    <Button variant="outlined" color="secondary" onClick={() => {}}>Hello World</Button>
                </Link>
            </p>
        </div>
    )
}

export default Main;