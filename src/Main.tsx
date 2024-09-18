import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Main = () => {
    return (
        <div>
            <div className='content'>
                <p>
                    This is a placeholder page.
                </p>
                <p>
                    I don't know what I'm doing. Send help.
                </p>
                <p>
                    <Link to={"/helloworld"}>
                        <Button variant="contained" onClick={() => {}}>Hello World</Button>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Main;